import { Alert } from "react-bootstrap";
import FormFornecedor from "./Formularios/FormCadastroFornecedor";
import Pagina from "../layouts/Pagina";
export default function TelaCadastroFornecedor(props) {
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                <FormFornecedor />
            </Pagina>
        </div>
    );
}