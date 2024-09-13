import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormUsuario from "./Formularios/FormCadastroUsuario";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { listaUsuarios } from "../../dados/mockUsuarios";

export default function TelaCadastroUsuario(props) {
    const [exibirUsuarios, setExibirUsuarios] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Usuário
                    </h2>
                </Alert>
                {
                    exibirUsuarios ?
                        <TabelaUsuarios listaUsuarios={listaUsuarios} setExibirUsuarios={setExibirUsuarios} /> :
                        <FormUsuario setExibirUsuarios={setExibirUsuarios} />
                }
            </Pagina>
        </div>
    );
}