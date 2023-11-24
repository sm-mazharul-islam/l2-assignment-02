import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/routes/user.routes';
const app: Application = express();

/* <-------using parsers---------> */
app.use(express.json());
app.use(cors()); // using cors

// application routes
app.use('/', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the server side api',
  });
};
app.get('/', getAController);

export default app;
