import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { doc, setDoc, getDoc, collection, getFirestore } from 'firebase/firestore/lite'

const ItemDetailContainer = () =>{

    const {id} = useParams()
    const [itemDet, setItemDet] = useState([])
    const [isLoading, setLoading] = useState(true)

    const database = getFirestore();
    const productRef = doc(database, "products", id);
    const productsCollection = collection(database, "products");

    useEffect(() => {
        async function getData(){
            const key = "nwzFKjYuERHZuLUJfuVf"
            const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs"
            let response = await fetch(`https://api.discogs.com/releases/${id}?&key=${key}&secret=${secret}`)
            let data = await response.json();
            const database = getFirestore();
            const productRef = doc(database, "products", id);
            const productsCollection = collection(database, "products");
            await setDoc(doc(productsCollection,data.id.toString()), data, {merge: true})
            setItemDet(data)
            setLoading(false)
            getDoc(productRef).then(snapshot=>{
                if(snapshot.exists()){
                    setItemDet(snapshot.data());
                    setLoading(false);
                }
            })
        }
        getData()
      },[id])
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