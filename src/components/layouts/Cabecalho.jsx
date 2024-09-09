import { Alert } from "react-bootstrap";
export default function Cabecalho(props) {
    //método render
    return (
        <Alert className={"text-center"} style={{ fontSize: "3em", fontWeight: "700" }} variant="dark">
            {props.titulo || "Título não fornecido"}
        </Alert>
    );
}