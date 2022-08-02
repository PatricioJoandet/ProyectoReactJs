import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import '../App.css'

const ItemDetailContainer = () =>{

    const [itemDet, setItemDet] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        async function getData(){
            let response = await fetch('https://api.discogs.com/database/search?type=release&token=tOdNAjivQsaCctXkXCEQXSUIcTqjzCqwHkTrZAYP')
            let data = await response.json()
            setItemDet(data.results)
            await 
            setLoading(false)
        }
        getData()
      },[])
      console.log(itemDet)
    if (isLoading){
        return <div> Loading ...</div>
    }
    return(
        <>
            <ItemDetail data={itemDet[1]} />
        </>
    )
}

export default ItemDetailContainer