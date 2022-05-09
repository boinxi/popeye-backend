import express from 'express';
import { Request, Response } from 'express';

const SignupRouter = require('./routes/signup_route');
const LoginRouter = require('./routes/login_route');

const app = express();
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})
app.use('/signup', SignupRouter);
app.use('/login', LoginRouter);

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
