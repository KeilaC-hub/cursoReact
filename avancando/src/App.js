import './App.css';

import Dog from "./assets/dog.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
