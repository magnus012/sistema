import { Alert, Container } from "react-bootstrap";
import FormProduto from "./Formularios/FormCadastroProduto";
import Pagina from "../../layouts/Pagina";
export default function TelaCadastroProduto(props) {
    return (
        <Container>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                <FormProduto />
            </Pagina>
        </Container>
    );
}