import TelaCadastroCliente from "./components/Telas/TelaCadastroCliente";
import TelaCadastroFornecedor from "./components/Telas/TelaCadastroFornecedor";
import TelaCadastroUsuario from "./components/Telas/TelaCadastroUsuario";
import TelaCadastroProduto from "./components/Telas/TelaCadastroProduto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tela404 from "./components/Telas/Tela404";
import TelaMenu from "./components/Telas/TelaMenu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* A ordem das rotas é importante */}
        <Routes>
          <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/cliente" element={<TelaCadastroCliente />} />
          <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
          <Route path="/usuario" element={<TelaCadastroUsuario />} />
          <Route path="*" element={<Tela404 />} />
          <Route path="/" element={<TelaMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
