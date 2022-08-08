import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) =>{
  const [cart, setCart] = useState([])

  const addToCart = (product) =>{
    console.log(product)
    setCart([...cart, product])
  }

  const clear = () =>{ setCart([])}

  const removeFromCart = (id) =>{
    const newCart = cart.filter((product) => product.id!==id)
    setCart(newCart)
  }

  return <CartContext.Provider value={{addToCart, cart }}>

    {children}

  </CartContext.Provider>
}

export default CartProvider;