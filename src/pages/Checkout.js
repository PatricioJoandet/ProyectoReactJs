import '../App.css'
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import MyModal from '../components/MyModal';
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Checkout = () =>{

  const [buyModal, setBuyModal] = useState(false);
	const [clearModal ,setClearModal] = useState(false);
  const {cart, clear, removeFromCart, total} = useContext(CartContext);
	const [success, setSuccess] = useState();
	
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: ''
	})

	const [order, setOrder] = useState({
		items: cart.map((product)=>{
			return{
				id: product.id,
				title: product.title,
				price: product.price
			}
		}),
		buyer: {},
		total: total
	})

	const handleChange = (e) =>{
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const submitData = (e) => {
		e.preventDefault()
		pushData({...order, buyer: formData})
	}

	const pushData = async(newOrder) =>{
		const database = getFirestore();
		const collectionOrder = collection(database, "orders");
		const orderDoc = await addDoc(collectionOrder, newOrder);
		setSuccess(orderDoc.id);
	}

	if (cart.length===0){ 
  	return(
    	<div className='emptyCheckout'>
      	<h1>Carrito vacio :(</h1>
        <Link to={"/"}><button>Volver</button></Link>
      </div>
 	 )
	}else{
    return(
			<>
			<Container>
				<Row className='mt-2 mb-2 checkoutHeader'>
					<Col className='d-flex'>
						<h1> Mi Carrito</h1>
						<Button className='ms-auto mb-1' variant='danger' onClick={()=>{setClearModal(true)}}>Borrar Carrito</Button>
					</Col>
				</Row>
				<Row className='checkoutHeader text-end'>
					<Col>
					
					</Col>
					<Col>
						<h3>Producto</h3>
					</Col>
					<Col className=''>
						<h3>Cantidad</h3>
					</Col>
					<Col>
						<h3>Precio</h3>
					</Col>
					<Col>
						<h3>Subtotal</h3>
					</Col>
				</Row>
				<Row className='d-flex flex-column'>
					{cart.map(product=>
								<Row key={product.id} className='pb-1 pt-1 checkoutItem text-end'>
									<Col className='d-flex'>
										<Col className='checkoutProductImg'>
											<img src={product.images[0].resource_url} alt={`Imagen de ${product.title}`}/>
										</Col>
										<Col className='checkoutProductTitle d-flex flex-column'>
											<h2>{product.title}</h2>
											<h3>{product.artists_sort}</h3>
										</Col>
										<Col className='text-end'>
											<span>{product.QtyCounter}</span>
											<button onClick={()=>removeFromCart(product.id)}>Borrar</button>
										</Col>
										<Col className=''>
											<span>${product.price}</span>
										</Col>
										<Col className=''>
											<span>${product.price * product.QtyCounter}</span>
										</Col>
									</Col>
								</Row>
							)}
				</Row>
				<Row>
					<div className='checkoutTotalTotal'>
							<span>Total: {`$ ${total}`}</span>
							<Button variant='success' onClick={() => setBuyModal(true)}>Comprar</Button>
					</div>
				</Row>
				{clearModal &&
					<MyModal title="Vaciar Carrito" show={clearModal} close={()=>setClearModal()}>
						<h2>¿Desea vaciar el carrito?</h2>
						<Button className='m-1' variant='danger' onClick={clear}>Vaciar</Button>
						<Button className='m-1' variant='primary' onClick={()=>setClearModal()}>Cancelar</Button>
					
					</MyModal>}
				{buyModal &&
						<MyModal title="DATOS DE COMPRA" show={buyModal} close={()=>setBuyModal()}>
							{success ?(
								<>
									<h2>Orden Enviada!</h2>
									<p>ID DE COMPRA: {success}</p>
									<h3> Gracias por comprar con nosotros!</h3>
									<Link to={'/'}><Button variant='success' onClick={clear}>FINALIZAR</Button></Link>
								</>
							):				
								<Form onSubmit={submitData}>
									<Form.Group>
										<Form.Label>Nombre y Apellido</Form.Label>
										<Form.Control type="text" placeholder='Nombre y Apellido' name='name' onChange={handleChange} value={formData.name}/>
									</Form.Group>
									<Form.Group>
										<Form.Label>Telefono</Form.Label>
										<Form.Control type="number" placeholder='Telefono' name='phone'  onChange={handleChange} value={formData.phone}/>
									</Form.Group>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email</Form.Label>
										<Form.Control type="email" placeholder='Direccion de Email' name='email' onChange={handleChange} value={formData.email}/>
									</Form.Group>
									<Button className={`m-2 ${(formData.name&&formData.phone&&formData.email)===""?"disabled":""}`} variant='success' type="submit"> Enviar Pedido </Button>
									<Button className='m-2' variant='danger' onClick={()=>setBuyModal(false)}>Cancelar</Button>
								</Form>
							}
						</MyModal>
				}
			</Container>
			</>
    )}
}

export default Checkout;