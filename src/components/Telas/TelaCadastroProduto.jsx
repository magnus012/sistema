import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormProduto from "./Formularios/FormCadastroProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import {listaProdutos} from "../../dados/mockProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirProdutos, setExibirProdutos] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="dark">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirProdutos ?
                    <TabelaProdutos listaProdutos={listaProdutos} setExibirProdutos={setExibirProdutos} /> :
                    <FormProduto setExibirProdutos={setExibirProdutos} />
                }
            </Pagina>
        </div>
    );
}