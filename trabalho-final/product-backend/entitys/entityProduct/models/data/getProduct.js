const getProductById = async (requisition, callback) => {
  let error;
  const productId = requisition.params.id ? requisition.params.id : requisition.query.id;
  const product = await requisition.context.models.Product.findById(productId);
  callback(product, error);
};

const getProductByName = async (requisition, callback) => {
  let error;
  const productName = requisition.query.name;
  const product = await requisition.context.models.Product.find({ name: `/${productName}/` });
  callback(product, error);
};

export {
  getProductByName,
  getProductById,
};
