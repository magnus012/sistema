import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
  return (
    <>
      <Container>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            props.setExibirClientes(false);
          }}
        >
          Adicionar
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Genêro</th>
              <th>Data Nascimento</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {props.listaClientes?.map((cliente) => {
              return (
                <tr>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.genero}</td>
                  <td>{cliente.dataNascimento}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.endereco}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}