import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
    price: Number,
    stock: Number,
    category: String,
    thumbnails: [String]
})

const ProductModel = mongoose.model('Product', productSchema)

export { ProductModel }