const listProduct = async (requisition, error, callback) => {
  const product = await requisition.context.models.Product.find();
  callback(product, error);
};

export default listProduct;
