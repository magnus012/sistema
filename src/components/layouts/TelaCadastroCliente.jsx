import { Form, Row, Col } from "react-bootstrap";
export default function TelaCliente(props) {
    return (
        <div>
            <h1 className="text-center">Cadastro de Cliente</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupCPF">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Genero</Form.Label>
                            <Form.Select aria-label="Genero">
                                <option selected value="">Nenhum</option>
                                <option value="1">Não Especificado</option>
                                <option value="2">Homem</option>
                                <option value="3">Mulher</option>
                                <option value="4">Outros</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupData">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control type="date" placeholder="Data de Nascimento" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="Telefone" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEndereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Endereço" />
                </Form.Group>
            </Form>
        </div>
    );
}