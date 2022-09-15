import logo from '../img/logo.png';
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

  const {qty} = useContext(CartContext);
  
  return (
    <>
      <Navbar sticky='top' className='navContainer' expand="md">
        <Container fluid>
          <Navbar.Brand className="logoContainer">
            <Link to={"/"} onClick={()=>window.scrollTo(0,0)}>
                <img src={logo} alt='Logo tienda'/>
             </Link>
           </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <div className="d-flex lista">
                <Link to="/" onClick={()=>window.scrollTo(0,0)}><button>Home</button></Link>
            </div>

            <div className='navCart ms-auto'>
              <div className={qty>0? 'carrito ms-1': 'carrito emptyCart ms-1'}>
                  <Link to={'/cart/'}>
                    <CartWidget />
                  </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;