const setProduct = async (requisition, error, callback) => {
  let productModel = requisition.context.models.Product;
  let productResources = requisition.body;

  const productCreated = await productModel.create({
    name: productResources.name,
    description: productResources.description,
    price: productResources.price,
    createdAt: new Date(),
  });

  callback(productCreated, error)
}

export default setProduct;