import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">  
      <NavBar />
      <ItemListContainer section="Destacados"/>
    </div>
  );
}

export default App
