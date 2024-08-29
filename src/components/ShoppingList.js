import React from 'react';
import { Container } from 'reactstrap';
import data from '../data/products.json';
import ProductList from './ProductList/ProductList';

class ShoopingList extends React.Component {
  render() {
    return (
      <Container fluid>
        <ProductList products={data.products} />
      </Container>
    );
  }
}

export default ShoopingList;
