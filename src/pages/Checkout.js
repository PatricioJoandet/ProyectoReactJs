import '../App.css'
import { useContext } from "react"
import { CartContext } from "../contex/CartContext"

const Checkout = () =>{

    const {cart, clear, removeFromCart} = useContext(CartContext)

    return(
        <div>
            <div className='checkoutTitle'>
                <h1>Checkout</h1>
								{cart.length>0 ? <button onClick={clear}>eliminar carrito</button> : <h2>carrito vacio</h2>}		
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
                          </div>)}		
																			
                </div>
            </div>
        </div>
    )
}

export default Checkout