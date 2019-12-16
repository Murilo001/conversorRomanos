const listProduct = async (requisition, callback) => {
  const product = await requisition.context.models.Product.find();
  callback(product);
};

export default listProduct;
