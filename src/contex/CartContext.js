import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) =>{

  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)
  const addToCart = (product) =>{
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

  useEffect(()=>{
    setQty(cart.reduce((qty, item) => qty + item.QtyCounter, 0))
  },[cart])

  return <CartContext.Provider value={{addToCart, cart, clear, qty, setQty, removeFromCart}}>

    {children}

  </CartContext.Provider>
}

export default CartProvider;