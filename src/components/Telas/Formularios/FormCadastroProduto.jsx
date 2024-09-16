import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { listaProdutos } from "../../../dados/mockProdutos";

export default function FormProduto(props) {

  //const [validated, setValidated] = useState(false);
  const [produto, setProduto] = useState(
    props.modoEdicao ? props.produtoSelecionado : {
      codigo: 0,
      dataValidade: "",
      descricao: "",
      precoCusto: 0,
      precoVenda: 0,
      qtdEstoque: 0,
      urlImagem: ""
    });
  const [formValidado, setFormValidado] = useState(false);
  /*const handleSubmit = (event) => {
    //validação
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };*/
  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaProdutos([...props.listaProdutos, produto]);
        //exibir tabela com o produto incluido
        props.setExibirProdutos(true);
        //cadastrar o produto
      }
      else {
        const listaAtualiza = props.listaProdutos.map((p) =>
          p.codigo === produto.codigo ? produto : p);
        props.setListaProdutos(listaAtualiza);
        //props.setListaProdutos([...props.listaProdutos.filter((p) => p.codigo !== produto.codigo), produto]);
        props.setModoEdicao(false);
      }
      props.setExibirProdutos(true);
      setFormValidado(false);
    }
    else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();

  }

  function manipularMudanca(evento) {
    const elemento = evento.target.name;
    const valor = evento.target.value;
    setProduto({ ...produto, [elemento]: valor });
  }

  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row>
        <Col>
          {/* ########## Código ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control required type="number" id="codigo" name="codigo" value={produto.codigo} onChange={manipularMudanca} placeholder="Código" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o código do produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Validade ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Válido até: </Form.Label>
            <Form.Control required type="date" id="dataValidade" name="dataValidade" value={produto.dataValidade} onChange={manipularMudanca} placeholder="Válido até:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a data de validade!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Descrição ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control required type="text" id="descricao" name="descricao" value={produto.descricao} onChange={manipularMudanca} placeholder="Descrição:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a descrição do produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## Preço Custo ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Preço de Custo:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Preço de Custo:"
              id="precoCusto"
              name="precoCusto"
              value={produto.precoCusto}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de custo deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Preço Venda ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Preço de Venda:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Preço de Venda:"
              id="precoVenda"
              name="precoVenda"
              value={produto.precoVenda}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de venda deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Estoque ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Estoque:</Form.Label>
            <Form.Control required type="number" id="qtdEstoque" name="qtdEstoque" value={produto.qtdEstoque} onChange={manipularMudanca} placeholder="Estoque:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a quantidade em estoque deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## URL Imagem ########## */}
          <Form.Group className="mb-3">
            <Form.Label>URL da Imagem:</Form.Label>
            <Form.Control required type="url" id="urlImagem" name="urlImagem" value={produto.urlImagem} onChange={manipularMudanca} placeholder="URL da Imagem:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a url da imagem deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-2 mb-2">
        <Col md={1}>
          <Button type="submit" variant="success">
            Confirmar
          </Button>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
          <Button
            onClick={() => {
              props.setExibirProdutos(true);
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
