import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:"João", email:"joao@gmail.com", bio:"Sou dev", role:"admin"}}/>
    </div>
  );
}

export default App;
