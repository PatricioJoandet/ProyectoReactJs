import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Categories from './components/Categories';



function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ProyectoReactJs/' element={<Home/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:cat' element={<ItemListContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
