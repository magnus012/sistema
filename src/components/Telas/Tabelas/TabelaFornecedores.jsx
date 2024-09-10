import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
  return (
    <>
      <Container>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            props.setExibirFornecedores(false);
          }}
        >
          Adicionar
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {props.listaFornecedores?.map((fornecedor) => {
              return (
                <tr>
                  <td>{fornecedor.nome}</td>
                  <td>{fornecedor.cnpj}</td>
                  <td>{fornecedor.email}</td>
                  <td>{fornecedor.telefone}</td>
                  <td>{fornecedor.endereco}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}