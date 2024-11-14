import express from 'express';

import { login, verify } from '../controllers/auth/auth_comtrollers.js';

const router = express.Router();

router.post('/', login);
router.post('/verify', verify);

export default router;