import Pagina from "./components/Pagina";
import TelaCliente from "./layouts/TelaCadastroCliente";
import TelaFornecedor from "./layouts/TelaCadastroFornecedor";
import TelaUsuario from "./layouts/TelaCadastroUsuario";
import TelaProduto from "./layouts/TelaCadastroProduto";
function App() {
  return (
    <div className="App">
      <Pagina>
        <TelaCliente titulo="Cadastro de Cliente"/>
        <TelaFornecedor titulo="Cadastro de Fornecedor"/>
        <TelaUsuario titulo="Cadastro de Usuario"/>
        <TelaProduto titulo="Cadastro de Produto"/>
      </Pagina>
    </div>
  );
}

export default App;
