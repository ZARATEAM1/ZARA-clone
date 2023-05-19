import express, { Application } from 'express';
// import cors from 'cors';
import productRoute from './routes/productRoute';

const app: Application = express();
// app.use(cors());

const PORT = 3001;

app.use('/api', productRoute);

app.listen(PORT, () => {
  console.log('Server is listening at http://localhost:3001');
});
