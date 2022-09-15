import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { doc, setDoc, getDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { Audio } from 'react-loader-spinner';
import fetchData from '../helpers/fetchData';

const ItemDetailContainer = () =>{

    const {id} = useParams();
    const [itemDet, setItemDet] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const database = getFirestore();;
    const productRef = doc(database, "products", id);
    const productsCollection = collection(database, "products");

    useEffect(() => {
      setLoading(true);
			const key = "nwzFKjYuERHZuLUJfuVf";
			const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs";
			const fetchApi = fetch(`https://api.discogs.com/releases/${id}?&key=${key}&secret=${secret}`);
			const db = getFirestore();
			const productRef = doc(db, "products", id);
			const productsCollection = collection(db, "products");

			fetchData(200, fetchApi).then(
				res => {
					if (res.ok){
						res.json().then(
							res =>{
								getDoc(productRef).then(snapshot=>{
									if (snapshot.exists()){
										if(snapshot.data().stock){
											if(!snapshot.data().price){
												setDoc(doc(productsCollection, res.id.toString()), res, {merge: true})
												res.stock = snapshot.data().num_for_sale;
												setItemDet(res);
												setLoading(false);
											}else{
												setItemDet(snapshot.data());
												setLoading(false);
											}
										}else{
											res.stock=res.num_for_sale;
											setDoc(doc(productsCollection,res.id.toString()), res, {merge: true})
											setItemDet(res);
											setLoading(false);
										}
									}else{
										setDoc(doc(productsCollection, res.id.toString()),res,{merge: true})
										setItemDet(res);
										setLoading(false);
									}
								}).catch(()=>{
									res.stock = res.num_for_sale;
									setItemDet(res);
									setLoading(false);
								})
							}
						)
					}
				}
			)
      },[id])
    if (isLoading){
        return <div className='loaderContainer'> <Audio color="#A71D31"/> </div>
    }
    return(
        <>
           <ItemDetail data={itemDet} />
        </>
    )
}

export default ItemDetailContainer;