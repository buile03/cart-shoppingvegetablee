import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import ShoppingList from '../ShoppingList';

import store from '../../store';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
        <ShoppingList />
      </Container>
    </div>
  </Provider>
);

export default App;
