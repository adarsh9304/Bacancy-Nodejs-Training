const express = require("express");
const app = express();

require("dotenv").config();

const dbConnect = require("./config/database");


dbConnect();
const PORT = 4000;

app.use(express.json());

// app.get('/',(req,res)=>{
//     return res.json({
//         success:true,
// 		message:'Your server is up and running....'
//     })
// })
const user=require('./routes/user');
const product=require('./routes/product');
const  order=require('./routes/order')
const cart=require('./routes/cart')

app.use("/api/v1/users", user);
app.use("/api/v1/products", product);
app.use("/api/v1/orders", order);
app.use("/api/v1/carts", cart);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})