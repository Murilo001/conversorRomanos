/** Common Functions */
const Util = require('../../../../common/util');
/** End Common Functions */

const verifyBusinessRule = (formData) => {
  const result = { error: false, message: '' };
  if (parseFloat(formData.price) <= 0) {
    result.error = true;
    result.message += 'Product price can\'t be 0 or lower.<br>';
  }
  if (formData.name.length > 100) {
    result.error = true;
    result.message += 'Product name can\'t be bigger than 100 characters.<br>';
  }
  if (result.error) {
    return result.message;
  }
  return null;
};

const verifyRequiredFields = (formData) => {
  const result = { error: false, message: '' };
  if (Util.isEmpty(formData)) { return 'Unspecified data.'; }

  if (Util.isEmpty(formData.name)) {
    result.error = true;
    result.message += 'Product name not provided.<br>';
  }
  if (Util.isEmpty(formData.price)) {
    result.error = true;
    result.message += 'Product price not provided.<br>';
  }
  if (result.error) {
    return result.message;
  }
  return null;
};

const validate = (requisition) => {
  try {
    const formData = requisition.body;
    const filled = verifyRequiredFields(formData);
    if (filled) { return filled; }
    const rule = verifyBusinessRule(formData);
    if (rule) { return rule; }
    return null;
  } catch (exception) {
    return null;
  }
};

export default validate;
