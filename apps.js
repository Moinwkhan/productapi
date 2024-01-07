require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const products = require("./routes/project");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("##DASHBOARD##");
});

app.use("/api/product", products);

const start = async () => {
  try {
    await connectDB(process.env.MongoDB_url);
    app.listen(port, () => {
      console.log(`${port} Happy Coding`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
