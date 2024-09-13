import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormFornecedor from "./Formularios/FormCadastroFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { listaFornecedores } from "../../dados/mockFornecedores";

export default function TelaCadastroFornecedor(props) {
    const [exibirFornecedores, setExibirFornecedores] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                {
                    exibirFornecedores ?
                        <TabelaFornecedores listaFornecedores={listaFornecedores} setExibirFornecedores={setExibirFornecedores} /> :
                        <FormFornecedor setExibirFornecedores={setExibirFornecedores} />
                }
            </Pagina>
        </div>
    );
}