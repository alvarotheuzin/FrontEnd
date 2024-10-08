"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="../">Sistema Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/fundamentos">Fundamento</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/array">Array</Nav.Link>
            <Nav.Link href="/carros">Carros</Nav.Link>
            <Nav.Link href="/nomes">Nomes</Nav.Link>
            <Nav.Link href="/numero">Numero</Nav.Link>
            <NavDropdown title="Disney" id="basic-nav-dropdown">
              <NavDropdown.Item href="/disney">Disney</NavDropdown.Item>
              <NavDropdown.Item href="/disney/cards">Cards Disney</NavDropdown.Item>
              <NavDropdown.Item href="/disney/carrossel">Carrossel</NavDropdown.Item>
              <NavDropdown.Item href="/disney/tabela">Tabela</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>{props.children}</Container>
    </>
  );
}