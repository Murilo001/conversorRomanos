import Util from './../../../common/util';
import validate from '../models/business/validateProduct';

import listProduct from '../models/data/listProduct';
import { getProductByName, getProductById } from '../models/data/getProduct';
import setProduct from '../models/data/setProduct';
import updateProduct from '../models/data/updateProduct';
import deleteProduct from '../models/data/deleteProduct';

const productRoutes = (router) => {

  router.get('/product', async (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        listProduct(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });

  router.get('/product/:id', (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        getProductById(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });

  router.get('/product/:name', (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        getProductByName(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });

  /**
   * Adicionar nova leitura.
   * @route POST /ocr
   * @group Adicionar - Adiciona uma leitura caso esteja tudo em conforme.
   * @param {string} req 
   * @returns {object} 200 - Messagem de sucesso.
   * @returns {Error}  500 - Dados inválidos.
   */
  router.post('/product', (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        setProduct(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });

  router.put('/product/:id', (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        updateProduct(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });

  router.delete('/product/:id', (requisition, response) => {
    try {
      let err;
      let invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        deleteProduct(requisition, err, (data) => {
          reqTreatment(response, data, err);
        });
      }
    } catch (err) {
      reqTreatment(response, null, err);
    }
  });
};

const reqTreatment = (response, data, error) => {
  let treatedResult;
  if (error) {
    response.status(500);
    treatedResult = error && String(error);
  } else {
    treatedResult = data;
  }
  response.json(treatedResult);
}

module.exports = productRoutes;