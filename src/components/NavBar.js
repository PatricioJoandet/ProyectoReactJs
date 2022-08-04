import logo from '../img/logo.png'
import '../App.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <nav className='navContainer'>

        <div className='logoContainer'>
          <Link to={"/"}>
            <img src={logo} alt='Logo tienda'/>
          </Link>
        </div>
        <div className='listaContainer'>
          <ul className='lista'>
            <Link to="/ProyectoReactJs"><li><button>Home</button></li></Link>
            <Link to="/Productos"><li><button>Productos</button></li></Link>
            <Link to="/categories"><li><button>Categorias</button></li></Link>
          </ul>
        </div>
        <CartWidget />
    </nav>
  );
}

export default NavBar;