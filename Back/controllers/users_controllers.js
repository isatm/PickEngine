import connection from "../database/db_connection.js";

export const getAllUsers = async (req, res) => {
    //de prueba para ver si se conecta a la base de datos
    //ELIMINAR
  try {
    const [results] = await connection.query('SELECT * FROM Usuario');
    res.json(results);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      console.log(id);
      const [results] = await connection.query('SELECT * FROM Usuario WHERE id = ?', id);
      res.json(results);
    } catch (error) {
      res.json({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    const { nombre1, nombre2, apellido1, apellido2, nickname, correo, contrasena } = req.body;
    try {
      const [results] = await connection.query('INSERT INTO Usuario (nombre1, nombre2, apellido1, apellido2, nick_name, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre1, nombre2, apellido1, apellido2, nickname, correo, contrasena]);
      res.json(results);
    } catch (error) {
      res.json({ error: error.message });
    }
}

export const verifyUser = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const [results] = await connection.query('SELECT id FROM Usuario WHERE correo = ? AND contrasena = ?', [correo, contrasena]);
    if (results.length > 0) {
      res.json({ userId: results[0].id });
    } else {
      res.json({ userId: -1 });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}