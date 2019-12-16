const updateProduct = async (requisition, callback) => {
  let error;
  const productId = requisition.params.id;
  const productModel = requisition.context.models.Product;
  const productResources = requisition.body;

  const productUpdated = await productModel.findByIdAndUpdate(
    productId,
    productResources,
    { new: true },
    (updateError, productUpdatedCallback) => {
      if (updateError) { error = updateError; }
      return productUpdatedCallback;
    },
  );

  callback(productUpdated, error);
};

export default updateProduct;
