import React from 'react';
import Card from '../components/basic/Card';
import FormProductRegister from '../components/productRegister/FormProductRegister';
import './ProductRegister.scss';

class ProductRegister extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Card>
          <FormProductRegister />
        </Card>
      </div>
    );
  }
}

export default ProductRegister;
