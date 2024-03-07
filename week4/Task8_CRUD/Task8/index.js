const express = require("express");
const app = express();

require("dotenv").config();

const dbConnect = require("./config/database");
const todoRoutes = require("./routes/todos");

dbConnect();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})