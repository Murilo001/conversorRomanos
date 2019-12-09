/** Business Rule Functions */
import validate from '../models/business/validateProduct';
/** End Business Rule Functions */

/** Model Functions */
import setProductModel from '../models/data/setProduct';
/** End Model Functions */


/**
 * Adicionar nova leitura.
 * @route POST /ocr
 * @group Adicionar - Adiciona uma leitura caso esteja tudo em conforme.
 * @param {string} req 
 * @returns {object} 200 - Messagem de sucesso.
 * @returns {Error}  500 - Dados inválidos.
 */
const postProduct = (req, callback) => {
  try {
    console.log(validate);
    let invalid = validate(req);
    if (invalid != null) {
      return callback(invalid);
    } else {
      setProductModel(req, (data) => {
        callback(data);
      });
    }
  } catch (er) {
    callback(er);
  }
};

module.exports = {
  postProduct: postProduct
};