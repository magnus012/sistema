import { Alert } from "react-bootstrap";
import FormUsuario from "./Formularios/FormCadastroUsuario";
import Pagina from "../layouts/Pagina";
export default function TelaCadastroUsuario(props) {
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                <FormUsuario />
            </Pagina>
        </div>
    );
}