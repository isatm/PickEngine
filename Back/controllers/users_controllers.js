import bcrypt from 'bcrypt';
import connection from "../database/db_connection.js";

const saltRounds = 10;

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
      const [results] = await connection.query('SELECT * FROM Usuario WHERE id = ?', id);
      res.json(results);
    } catch (error) {
      res.json({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    const { nombre1, nombre2, apellido1, apellido2, nickname, correo, contrasena } = req.body;
    const hashedcontrasena = await bcrypt.hash(contrasena, saltRounds);
    try {
      const [results] = await connection.query('INSERT INTO Usuario (nombre1, nombre2, apellido1, apellido2, nick_name, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre1, nombre2, apellido1, apellido2, nickname, correo, hashedcontrasena]);
      res.json(results);
    } catch (error) {
      res.json({ error: error.message });
    }
}

export const verifyUser = async (correo, contrasena) => {
  try {
    const [results] = await connection.query('SELECT id, nick_name, rol, contrasena FROM Usuario WHERE correo = ?', [correo]);
    if (results.length <= 0) {
      return { userId: -1 };
    }

    const hashedcontrasena = results[0].contrasena;
    const match = await bcrypt.compare(contrasena, hashedcontrasena);

    if (match) {
      return { 
        userId: results[0].id,
        nickName: results[0].nick_name,
        rol: results[0].rol
      };
    } else {
      return { userId: -1 };
    }
  } catch (error) {
    throw new Error(error.message);
  }
}