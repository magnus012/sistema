// nomeUsuario: "ChapaUsuario",
//       email: "exemplo@hotmail.com",
//       perfil: "Admin",
//       senha: "123",
//       senhaConfirmacao: "123",
import { Button, Container, Table } from "react-bootstrap";

export default function TabelaUsuarios(props) {
  return (
    <>
      <Container>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            props.setExibirUsuarios(false);
          }}
        >
          Adicionar
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome Usuario</th>
              <th>Perfil</th>
              <th>Email</th>
              <th>Senha</th>
              <th>Senha Confirmação</th>
            </tr>
          </thead>
          <tbody>
            {props.listaUsuarios?.map((usuario) => {
              return (
                <tr>
                  <td>{usuario.nomeUsuario}</td>
                  <td>{usuario.perfil}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                  <td>{usuario.senhaConfirmacao}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}