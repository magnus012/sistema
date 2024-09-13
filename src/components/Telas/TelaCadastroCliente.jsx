import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCliente from "./Formularios/FormCadastroCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { listaClientes } from "../../dados/mockClientes";

export default function TelaCadastroCliente(props) {
    const [exibirClientes, setExibirClientes] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                {
                    exibirClientes ?
                        <TabelaClientes listaClientes={listaClientes} setExibirClientes={setExibirClientes} /> :
                        <FormCliente setExibirClientes={setExibirClientes} />
                }
            </Pagina>
        </div>
    );
}