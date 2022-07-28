import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'

function App() {
  return (
    <div className="App">  
      <NavBar />
      <ItemListContainer section="Destacados" /> 
      
    </div>
  );
}

export default App
