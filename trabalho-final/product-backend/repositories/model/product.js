import mongoose from 'mongoose';

const { Schema } = mongoose;
const Model = mongoose.model;

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  description: String,
  price: { type: Number, required: true },
  createdAt: {
    type: Date,
    required: [true],
  },
});

const Product = Model('Product', ProductSchema);

export default Product;
