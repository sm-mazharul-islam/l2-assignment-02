import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

/* <-------using parsers---------> */
app.use(express.json());
app.use(cors()); // using cors
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
