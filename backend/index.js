
//import express and cors
const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/cart")

//create an express appln
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',indexRouter)
//create a get route
//app.use('/cart', cartRouter);
app.get("/message", (req, res) => {
  res.json({ message: "Hello our precious customer!" });
});

// GET: Fetch all products from the database
app.get('/', (req, res) => {
  db.select('*')
      .from('products')
      .then((data) => {
          console.log(data);
          res.json(data);
      })
      .catch((err) => {
          console.log(err);
      });
});

// GET: Fetch product by  productid from the database
app.get('/:product_id', (req, res) => {
  const product_id = req.params.product_id;
  db.select('*')
      .from('products')
      .where('product_id', '=', product_id)
      .then((data) => {
          console.log(data);
          res.json(data);
      })
      .catch((err) => {
          console.log(err);
      });
});



// DELETE: Delete product by product_id from the database
app.delete('/delete-product', (req, res) => {
  const produt_id = req.body;
  const producttodelete = Number(produt_id.product_id);
  console.log(producttodelete);
  db('shopping')
      .where('product_id', '=', producttodelete)
      .del()
      .then(() => {
          console.log('Product Deleted');
          return res.json({ msg: 'Product Deleted' });
      })
      .catch((err) => {
          console.log(err);
      });
});






//start the backend

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});