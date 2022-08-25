import '../App.css'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories'
import Pagination from './Pagination'
import { collection, getFirestore, getDocs, doc, setDoc } from "firebase/firestore/lite";

const ItemListContainer = ()=>{
  
  const {cat}=useParams()
  const [listProducts, setListProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [pages, setPages] = useState()
  const key = "nwzFKjYuERHZuLUJfuVf"
  const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs"

  useEffect(() => {
      setLoading(true)
      async function getData(){
        const defaultLoad = 'type=release&sort=hot%2Cdesc?'
        const categoryLoad = `type=release&genre=${cat}`
        let response = await fetch(`https://api.discogs.com/database/search?${cat?categoryLoad:defaultLoad}&key=${key}&secret=${secret}`)
        let data = await response.json();
        await setPages(data.pagination.urls)
        const database = getFirestore();
        const productsCollection = collection(database, "products");
        data.results.forEach((product) =>{
          setDoc(doc(productsCollection, product.id.toString()), product, { merge: true })
        })
        let firebaseProducts = []
        await getDocs(productsCollection, "products").then(results=>results.forEach(result=>{
          data.results.forEach((r)=>{
            if(result.data().id === r.id){
              firebaseProducts = [...firebaseProducts, result.data()]
            }
          })
        }))
        await setListProducts(firebaseProducts)
          setLoading(false)
    }
      getData()
    },[cat])

  if (isLoading){
      return <div> Loading ...</div>
  }else{ 
  return(
    <>
      <div className='itemListContainer'>
        <Categories/>
        {cat? <h1>Mostrando: {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}</h1>:<h1>Mostrando todo</h1>}
        <Pagination setListProducts={setListProducts} setPages={setPages} pages={pages} />
        <ItemList dataProducts={listProducts} />

      </div>
    </>
  )
}
}

export default ItemListContainer