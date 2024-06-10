const express = require('express');
const mongoose = require('mongoose');

// const connect = require ("./config/db");
const { productroute } = require('./Routes/product.routes');
const orderoutes = require('./Routes/orders.routes');
const app = express()
const cors = require('cors');


app.use(express.json())
app.use(cors())
app.use("/products", productroute)

app.use('/products/orders', orderoutes);

  

  app.get("/",(req,res)=>{

    res.send("welcome")
  })

app.listen(8000, (err)=>{
  console.log("server connected")
//   connect()
  
})