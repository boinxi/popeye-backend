import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works, amit is your king');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Application started on port ${process.env.PORT || 5000}`);
});
