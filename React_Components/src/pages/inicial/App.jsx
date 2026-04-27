//componente
import PrimeiroComponente from "../../components/navBar/PrimeiroComponente";
import UseState from "../../components/UseState";
import ListaComponente from "../../components/ListaComponente";
//css
import "./App.css"
function App() {
  return (
    <div className="App">
      <PrimeiroComponente/>
      <UseState/>
      <h2>Hello World!</h2>
      <ListaComponente/>
    </div>
  );
}

export default App;
