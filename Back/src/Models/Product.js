const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema(
  {
    "name": { type: String, required: true },
    "price": { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);