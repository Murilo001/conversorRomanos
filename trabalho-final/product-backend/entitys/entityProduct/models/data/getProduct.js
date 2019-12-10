const getProductById = async (requisition, error, callback) => {
  const productId = requisition.params.id;
  const product = await requisition.context.models.Product.findById(productId);
  callback(product, error);
};

const getProductByName = async (requisition, error, callback) => {
  const productName = requisition.params.name;
  const product = await requisition.context.models.Product.find({ name: `/${productName}/` });
  callback(product, error);
};

export {
  getProductByName,
  getProductById,
};
