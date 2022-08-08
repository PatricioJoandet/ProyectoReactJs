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
            <Link to="/"><li><button>Home</button></li></Link>
          </ul>
        </div>
        <div className='carrito'>
          <Link to={'/cart/'}>
            <CartWidget />
          </Link>
        </div>
    </nav>
  );
}

export default NavBar;