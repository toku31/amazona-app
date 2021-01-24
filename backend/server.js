import express from 'express';
import mongoose from 'mongoose'
// import data from './data.js';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config(); // jwt secret

const app = express();
app.use(express.json()); // postman
app.use(express.urlencoded({ extended: true}));  //postman

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if(product){
//       res.send(product);
//     } else {
//       res.status(400).send({ message: 'Product not Found '});
//     }
// })

// app.get('/api/products', (req, res) => {
//   res.send(data.products)
// })

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next)=> {
  res.status(500).send({ message: err.message });
})
const port = process.env.PORT  || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

