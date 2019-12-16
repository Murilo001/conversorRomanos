const listProduct = async (requisition, callback) => {
  const error = null;
  const product = await requisition.context.models.Product.find(
    (findError) => findError,
  );
  callback(product, error);
};

export default listProduct;
