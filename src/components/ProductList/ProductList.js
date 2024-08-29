import React from 'react';
import ProductListItem from './ProductListItem';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Row } from 'reactstrap';
const ProductListing = props => (
  <Row>
    {props.products.map(product => (
      <ProductListItem
        product={product}
        key={product.id}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
      />
    ))}
  </Row>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
export default connect(
  mapStateToProps,
  { addToCart, removeFromCart },
)(ProductListing);
