import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormCliente(props) {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* ########## Nome ########## */}
      <Form.Group className="mb-3" controlId="formGroupNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control required type="text" placeholder="Nome" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu nome completo
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col>
          {/* ########## CPF ########## */}
          <Form.Group className="mb-3" controlId="formGroupCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control required type="text" placeholder="CPF" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu cpf!, ___.___.___-__.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Genero ########## */}
          <Form.Group>
            <Form.Label>Genero</Form.Label>
            <Form.Select
              required
              aria-label="Genero"
              controlId="formGroupGenero"
            >
              <option selected value="">
                Nenhum
              </option>
              <option value="1">Homem</option>
              <option value="2">Mulher</option>
              <option value="3">Outros</option>
              <option value="4">Não Especificado</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione um genero!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## Data Nascimento ########## */}
          <Form.Group className="mb-3" controlId="formGroupData">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Data de Nascimento"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe sua data de nascimento!
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
      {/* ########## Email ########## */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Email" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu email: nome@exemplo.com.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Endereço ########## */}
      <Form.Group className="mb-3" controlId="formGroupEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control required type="text" placeholder="Endereço" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu endereço!, EX: Rua Te Achei N420 Barretos
          14783-252 SP.
        </Form.Control.Feedback>
      </Form.Group>
      <Row className="mt-2 mb-2">
        <Col md={1}>
          <Button type="submit" variant="success">
            Confirmar
          </Button>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
          <Button
            onClick={() => {
              props.setExibirClientes(true);
            }}
            type="button"
            variant="success"
          >
            Voltar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
