import Pagina from "./components/layouts/Pagina";
function App() {
  return (
    <div className="App">
      <Pagina>
        <h1>Esta é a pagina de cadastro de cliente</h1>
      </Pagina>
      <Pagina>
        <h1>Esta é a pagina de cadastro de produto</h1>
      </Pagina>
    </div>
  );
}

export default App;
