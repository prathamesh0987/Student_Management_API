// index.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
