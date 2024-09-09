import { Alert} from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import FormCliente from "./Formularios/FormCadastroCliente";
export default function TelaCadastroCliente(props) {
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                <FormCliente />
            </Pagina>
        </div>
    );
}