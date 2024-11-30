import connection from "../database/db_connection.js";

export const getProducts = async (req, res) => {
    try {
        const [results] = await connection.query(
            'SELECT id, nombre, precio, ruta_imagen FROM Producto WHERE stock > 0 ORDER BY fecha_publicacion DESC limit 16'
        );
        res.json(results);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await connection.query(
            'SELECT p.*, v.nombre1, v.apellido1, v.telefono, v.correo, v.ruta_foto_perfil FROM Producto p INNER JOIN usuario v ON p.id_vendedor = v.id WHERE p.id = ? ', [id]
        );
        res.json(results);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const filterProducts = async (req, res) => {
    const { nombreProducto, categories, maxPrice } = req.body;
    let query = 'SELECT id, nombre, precio, ruta_imagen FROM Producto WHERE stock >= 0';
    let params = [];
    if (nombreProducto) {
        query += ' AND nombre LIKE ?';
        params.push(`%${nombreProducto}%`);
    }

    if (categories && categories.length > 0) {
        query += ' AND categoria IN (?)';
        params.push(categories);
    }

    if (maxPrice && maxPrice > 0) {
        query += ' AND precio <= ?';
        params.push(maxPrice);
    }

    query += ' ORDER BY fecha_publicacion DESC limit 16';
    try {
        const [results] = await connection.query(query, params);
        res.json(results);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { nombre, descripcion, precio, stock, categoria, imagen, idVendedor } = req.body;
    try {
        const [results] = await connection.query(
            'INSERT INTO Producto (nombre, descripcion, precio, stock, ruta_imagen, id_vendedor) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, descripcion, precio, stock, imagen, idVendedor]
        );
        handleCategories(results.insertId, categoria);
        res.json({ insertId: results.insertId });
    } catch (error) {
        res.json({ error: error.message });
    }
};

const handleCategories = async (prodId, categories) => {
    const categoriesArray = categories.split(',').map(category => category.trim());
    const categoriesIds = await getCategoriesId(categoriesArray);

    addCategoriesToProduct(prodId, categoriesIds);
}

const addCategoriesToProduct = async (prodId, categories) => {
    try {
        for (const categoryId of categories) {
            await connection.query('INSERT INTO Producto_Categoria (id_producto, id_categoria) VALUES (?, ?)', [prodId, categoryId]);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getCategoriesId = async (catsArray) => {
    const catIds = [];
    try {
        for (const category of catsArray) {
            const [res] = await connection.query('SELECT id FROM Categoria WHERE nombre = ?', [category]);
            if (res.length > 0) {
                // Si la categoria ya existe en la tabla, se añade su id al array
                catIds.push(res[0].id);
            } else {
                catIds.push(await createCategory(category));
            }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
    return catIds;
}

const createCategory = async (nombre) => {
    try {
        const results = await connection.query(
            'INSERT INTO Categoria (nombre) VALUES (?)', [nombre]
        );
        return results[0].insertId;
    } catch (error) {
        return { error: error.message };
    }
}