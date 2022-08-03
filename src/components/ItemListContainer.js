import '../App.css'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//tOdNAjivQsaCctXkXCEQXSUIcTqjzCqwHkTrZAYP


const ItemListContainer = ( {cat} )=>{
  
  const [listProducts, setListProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  console.log(cat)

  useEffect(() => {
    async function getData(){
        const key = "nwzFKjYuERHZuLUJfuVf"
        const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs"
        if(cat===undefined){
          let response = await fetch(`https://api.discogs.com/database/search?type=release&sort=hot%2Cdesc?&key=${key}&secret=${secret}`)
          let data = await response.json();
          setListProducts(data.results)
          await console.log(listProducts)
          setLoading(false)
        }else{
          let response = await fetch(`https://api.discogs.com/database/search?type=master&genre=${cat}&key=${key}&secret=${secret}`)
          let data = await response.json();
          setListProducts(data.results)
          console.log(listProducts)
          setLoading(false)
        }
    }
    getData()
  },[])

  if (isLoading){
      return <div> Loading ...</div>
  }else{  
  return(
    <>
      <div>
        <Link to={`/rock`}>
          <button>Rock</button>
        </Link>
        <Link to={`/pop`}>
          <button>Pop</button>
        </Link>
        <Link to={`/blues`}>
          <button>blues</button>
        </Link>
        <Link to={`/country`}>
          <button>country</button>
        </Link>
        <Link to={`/electronic`}>
          <button>electronic</button>
        </Link>
      </div>
      <div className='itemListContainer'>
       <ItemList dataProducts={listProducts} />
        
      </div>
    </>
  )
}
}

export default ItemListContainer