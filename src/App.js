import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Agricultor from './components/Agricultor/Agricultor';
import NovoAgricultor from './components/Agricultor/NovoAgricultor';
import AlterarAgricultor from './components/Agricultor/AlterarAgricultor';
import BarraNavegacao from './components/BarraNavegacao';



function Login() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>Acesso - Sistema BookSell</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <div className="mb-3">
                  <p>
                    Ainda não tem conta? Clique <NavLink to="/cadastrar">aqui</NavLink> para se cadastrar!
                  </p>
                </div>

                <NavLink to="/components/BarraNavegacao">
                  <Button variant="primary">Acessar</Button>
                </NavLink>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/components/BarraNavegacao" element={<BarraNavegacao />} />
      <Route path="/Agricultor" element={<Agricultor />} />
      <Route path="/Novo-Agricultor" element={<NovoAgricultor />} />
      <Route path="/Alterar-Agricultor" element={<AlterarAgricultor />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      {/* Outras rotas podem ser adicionadas aqui */}
    </Routes>
  </Router>
  );
}

export default App;
