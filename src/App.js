import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
