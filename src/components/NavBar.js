import logo from '../img/logo.png'
import carrito from '../img/carrito.svg'
import '../App.css'


function NavBar() {
  return (
    <div className='navContainer'>
      <div className='cosas'>
        <div className='logoContainer'>
          <img src={logo} alt='Logo tienda'/>
        </div>
        <div className='listaContainer'>
          <ul className='lista'>
            <li>Home</li>
            <li>Productos</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='carrito'>
          <img src={carrito}/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;