import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑</h1>' +
      '<h1>👑👑Application works, amit is your king!!!!!!!👑👑</h1> ' +
      '<h1>👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑👑</h1>' +
      '<h2>Server is live!!</h2>' +
      '<iframe src="https://giphy.com/embed/SggILpMXO7Xt6" width="480" height="262" allowFullScreen/>');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Application started on port ${process.env.PORT || 5000}`);
});
