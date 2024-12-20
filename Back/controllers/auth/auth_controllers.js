import jwt from 'jsonwebtoken';
import "dotenv/config";
import { verifyUser } from '../users_controllers.js';

const secretKey = process.env.AUTH_SECRET_KEY;

export const login = async (req, res) => {
    const { correo, contrasena, rememberMe } = req.body;
    try {
        const results = await verifyUser(correo, contrasena);
        if ((results.userId) && (results.userId !== -1)) {
            const expiresIn = rememberMe ? '30d' : '1h'; // 30 días si "Remember Me" está seleccionado, 1 hora si no
            const token = jwt.sign(
                { userId: results.userId, nickName: results.nickName, rol: results.rol },
                secretKey,
                { expiresIn: expiresIn }
            );
            res.json({ login: true, token: token });
        } else {
            res.json({ login: false });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

export const verify = (req, res) => {
    const token = req.body.token;
    if (token) {
        try {
            const userData = jwt.verify(token, secretKey);
            res.json({login: true, userData: userData});
        } catch (error) {
            res.json({ login: false, error: error.message });
        }
    } else {
        res.json({ login: false });
    }
}
