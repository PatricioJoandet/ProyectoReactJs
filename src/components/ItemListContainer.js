import '../App.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import Pagination from './Pagination';
import { Audio } from 'react-loader-spinner';
import fetchData from '../helpers/fetchData';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

const ItemListContainer = ()=>{
  
  const {cat}=useParams();
  const {searchId} = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pages, setPages] = useState();
  const key = "nwzFKjYuERHZuLUJfuVf";
  const secret = "EFbNzVTpAqxwxBaybfXLsLsYQthFsdYs";

  const paginationFetch = (pageUrl) =>{
    let fetchApi = fetch(pageUrl);
    fetchData(2000, fetchApi).then(
      res => {
        if(res.ok){
          res.json().then(
            res => {
              setPages(res.pagination);
              res.results.forEach((r)=>{
                r.price = Math.trunc((r.community.have - r.community.want)*.8+2000);
              })
              setListProducts(res.results);
              console.log(res.pagination);
            }
          )
        }else{
          console.error("Fetch error");
        }
      }
    )
  }
  
  useEffect(() => {
      setLoading(true);
      const defaultLoad = 'type=release&sort=have&sort_order=desc';
      const categoryLoad = `type=release&genre=${cat}&type=release&sort=have&sort_order=desc`;
      const searchLoad = `q=${searchId}&type=release&sort=have&sort_order=desc`;
      const fetchApi = fetch(`https://api.discogs.com/database/search?${searchId?searchLoad:(cat?categoryLoad:defaultLoad)}&key=${key}&secret=${secret}`);

      fetchData(2000, fetchApi).then(
        res => {
          if(res.ok){
            res.json().then(
              res => {
                res.results.forEach((r)=>{
                  r.price = Math.trunc((r.community.have - r.community.want)+2000);
                })
                setListProducts(res.results);
                setLoading(false);
                setPages(res.pagination);
              }
            ).catch(err =>{console.error("Fetch error: ", err)});
          } else{
            console.error("Error");
          }
        }
      ).catch(err =>{console.error("Fetch error: ", err)}) 
    },[cat,searchId]);

  if (isLoading){
      return <div className='loaderContainer'> <Audio color="#A71D31"/> </div>
  }else{ 
  return(
    <Container>
      <Categories cat={cat} searchId={searchId}/>
        <SearchBar/>
        {listProducts.length===0?<h1 className='mt-2 text-center'>No hay resultados :(</h1>:
        <>
          <Pagination pagination={pages} paginationFetch={paginationFetch}/>
          <ItemList dataProducts={listProducts} pagination={pages} paginationFetch={paginationFetch} cat={cat} />
          <Pagination pagination={pages} paginationFetch={paginationFetch}/>
        </>}
    </Container>
    )
  }
}

export default ItemListContainer;