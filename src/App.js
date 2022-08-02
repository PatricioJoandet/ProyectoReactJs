import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">  
      <NavBar />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App
