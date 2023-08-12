import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import router from './router/route.js';
import connect from './database/connect.js';

const app = express();
const port = 4000;

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))


app.get('/test', (req, res) => {
  res.send('Hello, this is your simple backend!');
});

app.use('/api',router)

connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});