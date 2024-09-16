import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroFornecedor from "./Formularios/FormCadastroFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { fornecedores } from "../../dados/mockFornecedores";

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
                        <TabelaFornecedores listaFornecedores={fornecedores} setExibirFornecedores={setExibirFornecedores} /> :
                        <FormCadastroFornecedor setExibirFornecedores={setExibirFornecedores} />
                }
            </Pagina>
        </div>
    );
}