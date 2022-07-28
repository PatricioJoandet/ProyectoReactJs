import item from '../utl/itemDetailMock'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import '../App.css'

const ItemDetailContainer = () =>{

    const [itemDet, setItemDet] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(item)
        },2000)
    })
    useEffect(()=>{
        getItem
        .then((res)=>{
            setItemDet(res)
            setLoading(false)
        })
    },[])

    if (isLoading){
        return <div> Loading ...</div>
    }

    return(
        <>
            <ItemDetail data={itemDet[0]} />
        </>
    )
}

export default ItemDetailContainer