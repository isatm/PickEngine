import 'dotenv/config';
import mysql from 'mysql2/promise';

let connection;

try {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log('Database connection established successfully as id', connection.threadId);
} catch (error) {
  console.error('Error connecting to the database:', error.message);
  process.exit(1); // Termina el proceso si no se puede conectar a la base de datos
}

export default connection;