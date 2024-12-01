import express, { NextFunction, Request, Response } from "express"
import cors from 'cors';
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello hi World!')
});

app.use(globalErrorHandler);
app.use(notFound)

export default app;