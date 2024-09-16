import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroProduto from "./Formularios/FormCadastroProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";


export default function TelaCadastroProduto(props) {
    const [exibirProdutos, setExibirProdutos] = useState(true);
    const [listaProdutos, setListaProdutos] = useState(produtos);
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
                    <TabelaProdutos 
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                        setExibirProdutos={setExibirProdutos}
                        setModoEdicao={setModoEdicao} 
                        setProdutoSelecionado={setProdutoSelecionado} /> :
                    <FormCadastroProduto 
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                        setExibirProdutos={setExibirProdutos}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao} 
                        setProdutoSelecionado={setProdutoSelecionado}
                        produtoSelecionado={produtoSelecionado}  />
                }
            </Pagina>
        </div>
    );
}