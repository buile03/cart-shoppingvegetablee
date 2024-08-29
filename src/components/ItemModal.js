import React, { Component } from 'react';

import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from './Cart/Cart';

export class ItemModal extends Component {
  state = { modal: false, name: '' };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <Label onClick={this.toggle}>
          <FontAwesomeIcon icon="cart-plus" color="#6DB65B" size="3x" />
        </Label>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Cart Summary</ModalHeader>
          <ModalBody>
            <Cart />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  {},
)(ItemModal);
