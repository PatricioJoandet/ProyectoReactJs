import '../App.css'
import { useContext } from "react"
import { CartContext } from "../contex/CartContext"

const Checkout = () =>{

    const {cart, clear, removeFromCart} = useContext(CartContext)

    return(
        <div>
            <div className='checkoutTitle'>
                <h1>Checkout</h1>
            </div>
            <div className='checkoutButtons'>
                <button onClick={clear}>Clear</button>
            </div>
            <div className='checkoutContainer'>
                <div className="checkoutItems"> 
                    <div>
                        {cart.map(product=>
                            <div key={product.id} className='checkoutItem'>
															<div className='checkoutItemInfo'>
																<div className='checkoutItemImg'>
																	<img src={product.images[0].resource_url} alt={`Imagen de ${product.title}`}/>
																</div>
																<div>
																	<h2>{product.title}</h2>
																	<h3>{product.artists_sort}</h3>
																	<span>{product.price}</span>
																</div>
															</div>
															<div>
																<button onClick={()=>removeFromCart(product.id)}>Borrar</button>
															</div>
                                  
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout