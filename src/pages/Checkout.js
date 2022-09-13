import '../App.css'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import MyModal from '../components/MyModal'
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { isDisabled } from '@testing-library/user-event/dist/utils'



const Checkout = () =>{

  const [showModal, setShowModal] = useState(false)
  const {cart, clear, removeFromCart, total} = useContext(CartContext)
	const [success, setSuccess] = useState()
	
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
		const database = getFirestore()
		const collectionOrder = collection(database, "orders")
		const orderDoc = await addDoc(collectionOrder, newOrder)
		setSuccess(orderDoc.id)
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
			<Container>
      	<div className='checkoutHead'>
					<Row >
						<Col className='align-content-lg-center'>
							<h1>Mi Carrito</h1>
							<button className='clearCartBtn' onClick={clear}>eliminar carrito</button>
						</Col>
					</Row>
    		</div>
      	<div>
					<div className="checkoutWrapper">
						<div className='checkoutHeader'>
							<div className='checkoutProduct'>
								<h3>Producto</h3>
							</div>
							<div className='checkoutQty'>
								<h3>Cantidad</h3>
							</div>
							<div className='checkoutPrice'>
								<h3>Precio</h3>
							</div>
							<div className='checkoutTotal'>
								<h3>Total</h3>
							</div>
						</div>
							{cart.map(product=>
								<div key={product.id} className='checkoutItem'>
									<div className='checkoutItemInfo'>
										<div className='checkoutProductImg'>
											<img src={product.images[0].resource_url} alt={`Imagen de ${product.title}`}/>
										</div>
										<div className='checkoutProductTitle'>
											<h2>{product.title}</h2>
											<h3>{product.artists_sort}</h3>
										</div>
										<div className='checkoutProductQty'>
											<span>{product.QtyCounter}</span>
											<button onClick={()=>removeFromCart(product.id)}>Borrar</button>
										</div>
										<div className='checkoutProductPrice'>
											<span>${product.price}</span>
										</div>
										<div className='checkoutProductTotal'>
											<span>${product.price * product.QtyCounter}</span>
										</div>
									</div>
								</div>
							)}
						<div className='checkoutTotalTotal'>
							<span>Total: {`$ ${total}`}</span>
							<button onClick={() => setShowModal(true)}>Comprar</button>
						</div>
					</div>
					{showModal &&
						<MyModal title="DATOS DE COMPRA" show={showModal} close={()=>setShowModal()}>
							{success ?(
								<>
									<h2>Orden Enviada!</h2>
									<p>ID DE COMPRA: {success}</p>
									<h3> Gracias por comprar con nosotros!</h3>
									<Button variant='success' onClick={clear}>FINALIZAR</Button>
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
									<Button className='m-2' variant='danger' onClick={()=>setShowModal(false)}>Cancelar</Button>
								</Form>
							}
						</MyModal>}
      </div>
			</Container>
    )}
}

export default Checkout