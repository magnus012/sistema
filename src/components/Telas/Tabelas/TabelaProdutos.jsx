import { Button, Container, Table, Image } from "react-bootstrap";

export default function TabelaProdutos(props) {
  return (
    <>
      <Container>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            props.setExibirProdutos(false);
          }}
        >
          Adicionar
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Preço de Custo</th>
              <th>Preço de Venda</th>
              <th>Estoque</th>
              <th>Imagem</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {props.listaProdutos?.map((produto) => {
              return (
                <tr>
                  <td>{produto.codigo}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.precoCusto}</td>
                  <td>{produto.precoVenda}</td>
                  <td>{produto.qtdEstoque}</td>
                  <td>
                    <Image
                      style={{ width: "64px", height: "64px" }}
                      src={produto.urlImagem}
                      thumbnail
                      alt="foto"
                    />
                  </td>
                  <td>{produto.dataValidade}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}