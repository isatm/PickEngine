import express from 'express';

import { getUserById, createUser, verifyUser } from '../controllers/users_controllers.js';

const router = express.Router()

router.get('/:id', getUserById)
router.post('/verify', verifyUser)
router.post('/create', createUser)

export default router