import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) =>{

  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)
  const [itemIndex, setItemIndex] = useState(0)

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

  return <CartContext.Provider value={{addToCart, cart, clear, qty, setQty, removeFromCart}}>

    {children}

  </CartContext.Provider>
}

export default CartProvider;