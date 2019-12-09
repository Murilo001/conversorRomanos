import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Minha Consulta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/create">Novo Paciente</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/list">Listagem de Pacientes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/appointment">Nova Consulta</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Produtos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/productCreate">
                    Cadastrar
                  </DropdownItem>
                  <DropdownItem>
                    - Listagem
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    - Exclusão
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
