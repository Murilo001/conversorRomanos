const updateProduct = async (requisition, error, callback) => {
  let productId = requisition.params.id;
  let productModel = requisition.context.models.Product;
  let productResources = requisition.body;

  const productUpdated = await productModel.findByIdAndUpdate(
    productId,
    productResources,
    {new: true},
    (err, productUpdatedCallback) => {
      if (err)
        error = err;
      return productUpdatedCallback;
    }
  );

  callback(productUpdated, error);
}

export default updateProduct;