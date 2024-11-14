import connection from "../database/db_connection.js";

export const publishPost = async (req, res) => {
    const { user_id, tags, description, image } = req.body;
    try {
        const [results] = await connection.query('INSERT INTO Publicacion (id_usuario, contenido, ruta_imagen) VALUES (?, ?, ?)', [user_id, description, image]);
        handleTags(results.insertId, tags);
        res.json(results);
    } catch (error) {
        res.json({ error: error.message });
    }

}

const handleTags = async (postId, tags) => {
    const tagsArray = tags.split(',').map(tag => tag.trim());
    const tagsIds = await getTags(tagsArray);

    addTagsToPost(postId, tagsIds);
}

const addTagsToPost = async (postId, tags) => {
    try {
        for (const tagId of tags) {
            await connection.query('INSERT INTO Publicacion_Etiqueta (id_publicacion, id_etiqueta) VALUES (?, ?)', [postId, tagId]);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getTags = async (tagsArray) => {
    const tagsIds = [];
    try {
        for (const tag of tagsArray) {
            const [res] = await connection.query('SELECT * FROM Etiqueta WHERE contenido = ?', [tag]);
            if (res.length > 0) {
                // Si la etiqueta ya existe en la tabla, se añade su id al array
                tagsIds.push(res[0].id);
            } else {
                tagsIds.push(await insertTag(tag));
            }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
    return tagsIds;
}

const insertTag = async (tagContent) => {
    try {
        const res = await connection.query('INSERT INTO Etiqueta (contenido) VALUES (?)', [tagContent]);
        return res[0].insertId;
    } catch (error) {
        console.error(error);
    }       
}

