import './App.css';

import Dog from "./assets/dog.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import ChangeMessageState from './components/ChangeMessageState';
import Message from './components/Message';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
    {id: 2, brand: "KIA", color: "Branco", km: 500},
    {id: 3, brand: "Ford", color: "Preto", km: 20000},
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  };

  {/* Tarefa 4 */}
  const pessoas = [
    {id: 1, nome: "João", idade: 20, profissao: "Analista"},
    {id: 2, nome: "Maria", idade: 14, profissao: "Aprendiz"},
    {id: 3, nome: "Pedro", idade: 26, profissao: "Assistente"},
]

  return (
    <div className="App">
        <h1>Avançando em React</h1>

        {/* Imagem em public */}
        <div>
          <img src="/cat.png" alt="Gato" />
        </div>

        {/* Imagem em asset */}
        <div>
          <img src={Dog} alt="Cachorro" />
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>

        {/* props */}
        <ShowUserName name="Keila"/>

        {/* destructuring */}
        <CarDetails brand="Ford" color="Azul" km={10000}/>

        {/* reaproveitamento */}
        <CarDetails brand="BMW" color="Branco" km={3500}/>

        {/* loop com array de obj */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}

        {/* fragment */}
        <Fragments propFragment="Teste"/>

        {/* children */}
        <Container myValue="Teste"> 
          <p>E este é o conteúdo</p>
        </Container>

        {/* executar função */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />

        {/* Tarefa 4 */}
        {pessoas.map((pessoa) => (
          <UserDetails
            key={pessoa.id}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}
    </div>
  );
}

export default App;
