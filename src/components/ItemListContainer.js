import '../App.css'
import products from '../utl/productsMock'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'

const ItemListContainer = ( {section} )=>{
  
  const [listProducts, setListProducts] = useState([])

  const getProducts = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(products)
    }, 2000);
  })
  useEffect(() => {
    getProducts
    .then( (res) =>{
      setListProducts(res)
    })
  },[])

  return(
    <div className='itemListContainer'>
      <h1>
        {section}
      </h1>
      <ItemList dataProducts={listProducts} />
    </div>
    )
}

export default ItemListContainer