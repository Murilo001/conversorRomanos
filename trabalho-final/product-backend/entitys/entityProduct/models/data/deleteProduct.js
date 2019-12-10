const deleteProduct = async (requisition, error, callback) => {
  const productModel = requisition.context.models.Product;
  const productId = requisition.params.id;

  const removedProduct = await productModel.findByIdAndDelete(productId, (err, product) => {
    if (err) { error = err; }
    return product;
  });
  callback(removedProduct, error);
};

export default deleteProduct;
