import express, { Application } from 'express';
import cors from 'cors';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';
const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const PORT = 3001;

app.use('/api', productRoute);

app.listen(PORT, () => {
  console.log('Server is listening at http://localhost:3001');
});
