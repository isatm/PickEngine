import express from 'express';

import { publishPost } from '../controllers/publications_controllers.js';

const router = express.Router()

router.post('/publish', publishPost);

export default router