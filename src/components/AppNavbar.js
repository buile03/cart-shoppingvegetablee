import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import ItemModal from './ItemModal';

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar expand="sm" className="mb-5">
          <Container>
            <NavbarBrand
              style={{ fontWeight: '800', fontSize: '2rem', color: '#11781C' }}
              href="/"
            >
              RAU CỦ SẠCH{' '}
              <label style={{ fontSize: '1.2rem' }}>
                Số 1 Việt Nam
              </label>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <ItemModal />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
