import '../App.css'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

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
			<>
      	<div className='checkoutHead'>
					<div className='checkoutMyCart'>
						<h1>Mi Carrito</h1>
						<button className='clearCartBtn' onClick={clear}>eliminar carrito</button>
					</div>
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
						<Modal title="DATOS DE COMPRA" close={()=>setShowModal()}>
							{success ?(
								<>
									<h2>Orden OK</h2>
									<p>ID DE COMPRA: {success}</p>
									<button onClick={clear}>FINALIZAR</button>
								</>
							):				
								<form onSubmit={submitData}>
									<input
										type='text'
										name='name'
										placeholder='Nombre'
										onChange={handleChange}
										value={formData.name}
									/>
									<input
										type='number'
										name='phone'
										placeholder='Telefono'
										value={formData.phone}
										onChange={handleChange}
									/>
									<input 
										type='email'
										name='email'
										placeholder='email'
										value={formData.email}
										onChange={handleChange}
									/>
									<button type="submit"> ENVIAR </button>
								</form>
							}
						</Modal>}
      </div>
			</>
    )}
}

export default Checkout