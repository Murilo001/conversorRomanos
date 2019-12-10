const setProduct = async (requisition, error, callback) => {
  const productModel = requisition.context.models.Product;
  const productResources = requisition.body;

  const productCreated = await productModel.create({
    name: productResources.name,
    description: productResources.description,
    price: productResources.price,
    createdAt: new Date(),
  });

  callback(productCreated, error);
};

export default setProduct;
