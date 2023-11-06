import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
console.log("Antes da function")

function App() {
 
let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(["Escovar os dentes", "Tomar cafe", "Trocar de roupa", "Dirigir o carro", "Chamar o gincho",])
  }, []);

  return (
    <div className='container'>
      <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
      <button onClick={adicionarNovoItem}>Adicionar</button>
      <ul className='todo-list'>
        {lista.map((item, index) => (
          <li key={index} className='todo-item'>
            {item}
            <button onClick={() => deletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem() {

    if (novoItem.length <=0){
      alert("Favor, Digite algo no campo tarefa!");
      return;
    }
    let itemIndex = lista.indexOf(novoItem);
if (itemIndex >= 0) {
  alert("Tarefa já adicionada!");
  return;
  }

    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}


export default App
