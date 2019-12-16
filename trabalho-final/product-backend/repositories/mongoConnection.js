import mongoose from 'mongoose';

import Product from './model/product';

mongoose.set('useFindAndModify', false);
const devDbUrl = 'mongodb://localhost:27017/test';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
const connectDb = () => mongoose.connect(mongoDB);

const models = { Product };

export { connectDb };

export default models;
