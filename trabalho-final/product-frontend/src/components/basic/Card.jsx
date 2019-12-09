import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          {children}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
