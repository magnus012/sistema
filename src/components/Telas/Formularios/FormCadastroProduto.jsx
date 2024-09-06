import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function FormProduto(props) {
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
            <Row>
                <Col>
                    {/* ########## Código ########## */}
                    <Form.Group className="mb-3" controlId="formGroupCodigo">
                        <Form.Label>Código</Form.Label>
                        <Form.Control required type="number" placeholder="Código" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o código do produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Validade ########## */}
                    <Form.Group className="mb-3" controlId="formGroupValidade">
                        <Form.Label>Válido até: </Form.Label>
                        <Form.Control required type="date" placeholder="Válido até:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a data de validade!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Descrição ########## */}
                    <Form.Group className="mb-3" controlId="formGroupDescricao">
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control required type="text" placeholder="Descrição:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a descrição do produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* ########## Preço Custo ########## */}
                    <Form.Group className="mb-3" controlId="formGroupNome">
                        <Form.Label>Preço de Custo:</Form.Label>
                        <Form.Control required type="number" placeholder="Preço de Custo:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de custo deste produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Preço Venda ########## */}
                    <Form.Group className="mb-3" controlId="formGroupNome">
                        <Form.Label>Preço de Venda:</Form.Label>
                        <Form.Control required type="number" placeholder="Preço de Venda:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de venda deste produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Estoque ########## */}
                    <Form.Group className="mb-3" controlId="formGroupEstoque">
                        <Form.Label>Estoque:</Form.Label>
                        <Form.Control required type="number" placeholder="Estoque:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a quantidade em estoque deste produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* ########## URL Imagem ########## */}
                    <Form.Group className="mb-3" controlId="formGroupUrlImagem">
                        <Form.Label>URL da Imagem:</Form.Label>
                        <Form.Control required type="url" placeholder="URL da Imagem:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a url da imagem deste produto!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" variant="success">
                Confirmar
            </Button>{" "}
        </Form>
    );
}