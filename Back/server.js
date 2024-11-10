import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { routerApi } from './routes/index_router.js';

const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']
    //origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});