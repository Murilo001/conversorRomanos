const setProduct = async (requisition, callback) => {
  let error;
  const productModel = requisition.context.models.Product;
  const productResources = requisition.body;

  const productCreated = await productModel.create({
    name: productResources.name,
    description: productResources.description,
    price: productResources.price,
    createdAt: new Date(),
  }, (createError) => { error = createError; });

  callback(productCreated, error);
};

export default setProduct;
