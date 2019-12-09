const deleteProduct = async (requisition, error, callback) => {
  let productModel = requisition.context.models.Product;
  let productId = requisition.params.id;

  const removedProduct = await productModel.findByIdAndDelete(productId, (err, product) => {
    if (err)
      error = err;
    return product;
  });
  callback(removedProduct, error);
}

export default deleteProduct;