import validate from '../models/business/validateProduct';

import listProduct from '../models/data/listProduct';
import { getProductByName, getProductById } from '../models/data/getProduct';
import setProduct from '../models/data/setProduct';
import updateProduct from '../models/data/updateProduct';
import deleteProduct from '../models/data/deleteProduct';

const reqTreatment = (response, data, error) => {
  let treatedResult;
  if (error) {
    response.status(500);
    treatedResult = error && String(error);
  } else {
    treatedResult = data;
  }
  response.json(treatedResult);
};

const productRoutes = (router) => {
  router.get('/product', async (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        listProduct(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });

  router.get('/product/:id', (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        getProductById(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });

  router.get('/product/:name', (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        getProductByName(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });

  router.post('/product', (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        setProduct(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });

  router.put('/product/:id', (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        updateProduct(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });

  router.delete('/product/:id', (requisition, response) => {
    try {
      const invalid = validate(requisition);
      if (invalid != null) {
        reqTreatment(response, null, invalid);
      } else {
        deleteProduct(requisition, (data, error) => {
          reqTreatment(response, data, error);
        });
      }
    } catch (error) {
      reqTreatment(response, null, error);
    }
  });
};

module.exports = productRoutes;
