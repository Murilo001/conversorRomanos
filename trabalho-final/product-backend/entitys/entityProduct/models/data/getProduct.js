const getProduct = async (requisition, error, callback) => {
  let productId = requisition.params.id;
  const product = await requisition.context.models.Product.findById(
    productId
  );
  callback(product, error);
};

export default getProduct;