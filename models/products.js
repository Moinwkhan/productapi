const mongoose = require("mongoose");

// schema of mobile online store
const productscheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be required"],
  },
  price: {
    type: Number,
    required: [true, "price must be required"],
  },
  featured: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: ["apple", "samsung", "mi", "iqoo"], 
    message: "{VALUE} not supported this company", 
  },
});

module.exports = mongoose.model("product", productscheme);
