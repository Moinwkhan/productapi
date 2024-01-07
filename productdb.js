require("dotenv").config();
const connectDB = require("./db/connect");
const model = require("./models/products");
const productjson = require("./product.json")

const start = async () => {
  try {
    await connectDB(process.env.MongoDB_url);
    await model.deleteMany();
    await model.create(productjson);
    console.log("Successfully stored data in Database");
  } catch (error) {
    console.log(error);
  }
};
start();
