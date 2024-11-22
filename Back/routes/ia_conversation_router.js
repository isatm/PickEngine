import express from 'express';

import { askQuestion } from '../controllers/ia_conversations_controllers.js';

const router = express.Router();

router.post('/', askQuestion);

export default router;