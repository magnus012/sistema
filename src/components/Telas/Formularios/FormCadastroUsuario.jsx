import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

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
      {/* ########## Nome Usuario ########## */}
      <Form.Group className="mb-3" controlId="formGroupNome">
        <Form.Label>Nome Usuario</Form.Label>
        <Form.Control required type="text" placeholder="Nome Usuario" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu nome de usuário!
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Email ########## */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Email" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu email: nome@exemplo.com.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Perfil ########## */}
      <Form.Group>
        <Form.Label>Perfil</Form.Label>
        <Form.Select required aria-label="Perfil" controlId="formGroupPerfil">
          <option selected value="">
            Nenhum
          </option>
          <option value="1">Admin</option>
          <option value="2">Visitante</option>
          <option value="3">Normal</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Por favor, selecione um tipo de perfil!.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Senha ########## */}
      <Form.Group className="mb-3" controlId="formGroupSenha">
        <Form.Label>Senha</Form.Label>
        <Form.Control required type="password" placeholder="Senha" />
        <Form.Control.Feedback type="invalid">
          Por favor, informe sua senha!
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Senha Confirmação ########## */}
      <Form.Group className="mb-3" controlId="formGroupSenhaConfirmacao">
        <Form.Label>Senha de Confirmação</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Senha de Confirmação"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe a confirmação de senha!
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
              props.setExibirUsuarios(true);
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
