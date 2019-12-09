const deleteProduct = async (requisition, error, callback) => {
  let productModel = requisition.context.models.Product;
  let productId = requisition.params.id;

  const kk = await productModel.findByIdAndRemove(productId, (err, product) => {
    if (err)
      error = err;
    
  })
}

// The "todo" in this callback function represents the document that was found.
// It allows you to pass a reference back to the client in case they need a reference for some reason.
Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
  // As always, handle any potential errors:
  if (err) return res.status(500).send(err);
  // We'll create a simple object to send back with a message and the id of the document that was removed
  // You can really do this however you want, though.
  const response = {
      message: "Todo successfully deleted",
      id: todo._id
  };
  return res.status(200).send(response);
});