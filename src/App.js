import Pagina from "./components/layouts/Pagina";
import TelaCliente from "./components/layouts/TelaCadastroCliente";
function App() {
  return (
    <div className="App">
      <Pagina>
        <TelaCliente/>
      </Pagina>
    </div>
  );
}

export default App;
