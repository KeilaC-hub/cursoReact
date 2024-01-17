import './App.css';
import CarrosDisp from './components/CarrosDisp';

function App() {

  const carros = [
    {id: 1, modelo: "Uno", preco: 15000, km: 8000},
    {id: 2, modelo: "Onix", preco: 54000, km: 5200},
    {id: 3, modelo: "Celta", preco: 13500, km: 12000},
  ]

  return (
    <div className="App">
      <h1>Carros disponíveis</h1>
      {carros.map((carro) => (
        <CarrosDisp
          key={carro.id}
          modelo={carro.modelo}
          preco={carro.preco}
          km={carro.km}
        />
      ))}
    </div>
  );
}

export default App;
