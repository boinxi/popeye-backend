import express from 'express';
import { Request, Response } from 'express';

const SignupRouter = require('./routes/signup_route');

const app = express();
app.use(express.json())

app.use('/signup', SignupRouter);

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
