import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function TelaFornecedor(props) {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    //validação
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <h1 className={"text-center"} variant="dark">
        {props.titulo || "Título não fornecido"}
      </h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            {/* ########## Nome ########## */}
            <Form.Group className="mb-3" controlId="formGroupNome">
              <Form.Label>Descrição da Empresa (Nome)*</Form.Label>
              <Form.Control required type="text" placeholder="Descrição da Empresa (Nome)*" />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o seu nome/da sua empresa!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            {/* ########## CNPJ ########## */}
            <Form.Group className="mb-3" controlId="formGroupCNPJ">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control required type="text" placeholder="CNPJ" />
              <Form.Control.Feedback type="invalid">
                Por favor, informe seu cnpj!, __.___.___.____-__.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* ########## Email ########## */}
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Por favor, informe seu email: nome@exemplo.com.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            {/* ########## Telefone ########## */}
            <Form.Group className="mb-3" controlId="formGroupTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control required type="text" placeholder="Telefone" />
              <Form.Control.Feedback type="invalid">
                Por favor, informe seu telefone!, ( )_____-____.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* ########## Endereço ########## */}
        <Form.Group className="mb-3" controlId="formGroupEndereco">
          <Form.Label>Endereço</Form.Label>
          <Form.Control required type="text" placeholder="Endereço" />
          <Form.Control.Feedback type="invalid">
            Por favor, informe seu endereço!, EX: Rua Te Achei N420 Barretos
            14783-252 SP.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="success">
          Confirmar
        </Button>{" "}
      </Form>
    </div>
  );
}
