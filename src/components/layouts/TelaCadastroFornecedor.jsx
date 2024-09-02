import { Form } from "react-bootstrap";
export default function TelaFornecedor(props)
{
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupCodigo">
            <Form.Label>Codigo</Form.Label>
            <Form.Control type="number" placeholder="codigo" />
          </Form.Group>
        </Form>
      );
}