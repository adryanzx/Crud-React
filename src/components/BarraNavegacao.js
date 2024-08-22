import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const BarraNavegacao = () => {
  
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Agricultor" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Agricultor">Gerenciar</NavDropdown.Item>
                <NavDropdown.Item href="#">Relatorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
};

export default BarraNavegacao;