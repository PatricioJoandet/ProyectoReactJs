import logo from '../img/logo.png'
import '../App.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

  const {qty} = useContext(CartContext)
  
  return (
    <>
      <Navbar className='navContainer' expand="md">
        <Container>
          <Navbar.Brand className="logoContainer">
            <Link to={"/"}>
                <img src={logo} alt='Logo tienda'/>
             </Link>
           </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=''>
            <Nav className="lista">
              <Nav.Item className='' ><Link to="/"><button>Home</button></Link></Nav.Item>
              <div className={qty>0? 'carrito': 'carrito emptyCart'}>
                <Link to={'/cart/'}>
                  <CartWidget />
                </Link>
              </div>
              <div>
                <SearchBar/>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/*       <nav className='navContainer'>

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
      </nav> */}
    </>
  );
}

export default NavBar;