import ItemCounter from "./ItemCounter"
import '../App.css'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"

const ItemDetail = ({data}) =>{

    const {title, year, community, genres} = data
    data.price = Math.trunc((community.have - community.want)*.8+2000)
    let stock = data.num_for_sale
    
    const [qtySelected, setQtySelected] = useState(0)

    return(
        <div className="itemDetailContainer">
            <div>
                <div className="mainImg">
                    <img className="itemDetailImg" src={data.images[0].resource_url} alt={`Portada de ${title}`}/>
                </div>
                <div className="altImg">               
                    {data.images.slice(0,4).map(img=><img src={img.resource_url} alt={`Imagen de ${title}`}/>)}
                </div>

            </div>
            <div className="itemDetailInfo">
                <div>
                    <h2>{data.artists_sort}</h2>
                    <h1 className="itemDetailTitle">{title}</h1>
                </div>
                <div className="itemExtraInfo">
                    <p>Año: {year}</p>
                    <p>Categorias: {genres}</p>
                    <p>Tracklist: </p>{data.tracklist.map(track=> <p key={`${track.position}-${track.title}`}>{track.position}-{track.title}</p>)}
                </div>
                <div>
                    <p className="itemDetailPrice">${data.price}</p>
                    <div className="stockCount">
                        <p>Stock: {stock}</p>
                        {qtySelected > 0 ? <Link to='/cart'><button>Terminar Compra</button> </Link>: <ItemCounter setQtySelected={setQtySelected} product={data} stock={stock}/>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail