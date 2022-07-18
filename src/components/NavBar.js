import logo from '../img/logo.png'
import '../App.css'
import CartWidget from './CartWidget'


function NavBar() {
  return (
    <nav className='navContainer'>

        <div className='logoContainer'>
          <img src={logo} alt='Logo tienda'/>
        </div>
        <div className='listaContainer'>
          <ul className='lista'>
            <li><button>Home</button></li>
            <li><button>Productos</button></li>
            <li><button>FAQ</button></li>
          </ul>
        </div>
        <CartWidget />
    </nav>
  );
}

export default NavBar;