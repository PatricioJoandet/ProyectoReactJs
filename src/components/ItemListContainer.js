import '../App.css'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//tOdNAjivQsaCctXkXCEQXSUIcTqjzCqwHkTrZAYP


const ItemListContainer = ()=>{
  
  let {cat}=useParams()
  const [listProducts, setListProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const key = "nwzFKjYuERHZuLUJfuVf"
  const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs"

useEffect(() => {
    async function getData(){

      const defaultLoad = 'type=release&sort=hot%2Cdesc?'
      const categoryLoad = `type=release&genre=${cat}`
      let response = await fetch(`https://api.discogs.com/database/search?${cat?categoryLoad:defaultLoad}&key=${key}&secret=${secret}`)
      let data = await response.json();
      setListProducts(data.results)
      await console.log(listProducts)
      setLoading(false)
  }
    getData()
  },[])
  if (isLoading){
      return <div> Loading ...</div>
  }else{ 
  return(
    <>
      <div className='itemListContainer'>
        <ItemList dataProducts={listProducts} />

      </div>
    </>
  )
}
}

export default ItemListContainer