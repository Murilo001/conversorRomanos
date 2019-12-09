import mongoose from 'mongoose';

import Product from './model/product';

mongoose.set('useFindAndModify', false);
const dev_db_url = 'mongodb://localhost:27017/test';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
const connectDb = () => {
  return mongoose.connect(mongoDB);
};

const models = { Product};

export { connectDb };

export default models;