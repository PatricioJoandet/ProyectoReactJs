import logo from '../img/logo.png'
import '../App.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

function NavBar() {

  const {qty} = useContext(CartContext)
  
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
        <div className={qty>0? 'carrito': 'carrito emptyCart'}>
            <Link to={'/cart/'}>
              <CartWidget />
            </Link>
        </div>
    </nav>
  );
}

export default NavBar;