import express, {Express, Request, Response, Router} from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Server');
})

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
})
