import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
export default function Pagina(props) {
  return (
    <>
      <Container className="w-75">
        <Cabecalho titulo="Sistema de Controle Gerencial" />
        <Menu />
        {props.children}
      </Container>
    </>
  );
}
