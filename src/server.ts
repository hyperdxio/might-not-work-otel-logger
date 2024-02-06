import express, { Request, Response } from 'express';
import Logger from './logger';

const app = express();
const port = 3000;

if (!process.env.HYPERDX_API_KEY) {
  throw new Error('HYPERDX_API_KEY is required');
}
// TODO: Initialize the logger with more options ??
const logger = new Logger(process.env.HYPERDX_API_KEY);

app.get('/', (req: Request, res: Response) => {
  logger.info();

  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
