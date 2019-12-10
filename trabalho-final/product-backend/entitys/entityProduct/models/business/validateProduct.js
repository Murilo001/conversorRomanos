/** Common Functions */
const moment = require('moment');
const util = require('../../../../common/util');
/** End Common Functions */

const validate = (formData) => {
  try {
    return null;
    const filled = verifyRequiredFields(formData);
    if (filled) { return filled; }
    const regra = verifyBusinessRule(formData);
    if (regra) { return regra; }
    return null;
  } catch (exception) {
    return null;
  }
};

const verifyBusinessRule = (formData) => null;

const verifyRequiredFields = (formData) => {
  const result = { error: false, message: '' };
  if (util.isEmpty(formData)) { return 'Dados não fornecidos.'; }

  if (util.isEmpty(formData.nomeClasse)) {
    result.error = true;
    result.message += 'Nome da classe não fornecido.<br>';
  }
  if (util.isEmpty(formData.autor)) {
    result.error = true;
    result.message += 'Autor não fornecido.<br>';
  }
  if (util.isEmpty(formData.atributos)) {
    result.error = true;
    result.message += 'Atributos não fornecidos.<br>';
  }

  if (result.error) {
    return result.message;
  }
  return null;
};

export default validate;
