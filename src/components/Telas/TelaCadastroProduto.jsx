import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormProduto from "./Formularios/FormCadastroProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { listaProdutos } from "../../dados/mockProdutos";


export default function TelaCadastroProduto(props) {
    const [exibirProdutos, setExibirProdutos] = useState(true);
    const [listaProduto, setListaProdutos] = useState(listaProdutos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        dataValidade: "",
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: ""
    });
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
                        <TabelaProdutos listaProdutos={listaProduto}
                            setExibirProdutos={setExibirProdutos}
                            setModoEdicao={setModoEdicao}
                            setProdutoSelecionado={setProdutoSelecionado} /> :
                        <FormProduto listaProdutos={listaProduto}
                            setListaProdutos={setListaProdutos}
                            setExibirProdutos={setExibirProdutos}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            produtoSelecionado={produtoSelecionado}
                            setProdutoSelecionado={setProdutoSelecionado} />
                }
            </Pagina>
        </div>
    );
}