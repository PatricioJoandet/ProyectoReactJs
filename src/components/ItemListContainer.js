import '../App.css'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'


//tOdNAjivQsaCctXkXCEQXSUIcTqjzCqwHkTrZAYP


const ItemListContainer = ( {section} )=>{
  
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.discogs.com/database/search?type=release&sort=hot%2Cdesc&token=RkqSJrgChJCPUvsaYEUrkgTSzPgnYlXzVEOZiwnp")
      .then(res=>{
        res.json()
        .then(res=>setListProducts(res.results))
        .then(console.log(listProducts))
      })
    }, 2000);
  },[])

  
  return(
    <div className='itemListContainer'>
      <h1>
        {section}
        <ItemList dataProducts={listProducts} />
      </h1>
    </div>
    )
}

export default ItemListContainer