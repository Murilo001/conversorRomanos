const updateProduct = async (requisition, error, callback) => {
  const productId = requisition.params.id;
  const productModel = requisition.context.models.Product;
  const productResources = requisition.body;

  const productUpdated = await productModel.findByIdAndUpdate(
    productId,
    productResources,
    { new: true },
    (err, productUpdatedCallback) => {
      if (err) { error = err; }
      return productUpdatedCallback;
    },
  );

  callback(productUpdated, error);
};

export default updateProduct;
