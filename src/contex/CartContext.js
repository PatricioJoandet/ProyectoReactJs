import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) =>{

  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)
  const addToCart = (product) =>{
    console.log(product)
    setCart([...cart, product])
  }

  const clear = () =>{ 
    setCart([])
    setQty(0)  
  }

  const removeFromCart = (id) =>{
    const newCart = cart.filter((product) => product.id!==id)
    setCart(newCart)
  }

  return <CartContext.Provider value={{addToCart, cart, clear, qty, setQty}}>

    {children}

  </CartContext.Provider>
}

export default CartProvider;