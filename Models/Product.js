import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  shortDescription: { type: String, require: true },
  bestSellingRank: { type: Number, require: true },
  thumbnailImage: { type: String, require: true },
  salePrice: { type: Number, require: true },
  manufacturer: { type: String, require: true },
  url: { type: String, require: true },
  type: { type: String, require: true },
  image: { type: String, require: true },
  customerReviewCount: { type: Number, require: true },
  shipping: { type: String, require: true },
  salePrice_range: { type: Array, require: true },
  objectID: { type: Number, require: true },
  categories: { type: Array, require: true },

});

export const Product = mongoose.model("Product", productSchema);

export default Product; 