import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{

    const {id} = useParams()
    const [itemDet, setItemDet] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function getData(){
            const key = "nwzFKjYuERHZuLUJfuVf"
            const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs"
            let response = await fetch(`https://api.discogs.com/releases/${id}?key=${key}&secret=${secret}`)
            let data = await response.json();
            setItemDet(data)
            setLoading(false)
            console.log(data)
        }
        getData()
      },[])
    if (isLoading){
        return <div> Loading ...</div>
    }
    return(
        <>
           <ItemDetail data={itemDet} />
        </>
    )
}

export default ItemDetailContainer