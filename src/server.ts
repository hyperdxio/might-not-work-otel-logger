import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// initialize a logger like new Logger({ ..options })

app.get('/', (req: Request, res: Response) => {
  // fire the logger like logger.info({ foo: 'bar' })

  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
