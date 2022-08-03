import ItemCounter from "./ItemCounter"
import '../App.css'


const ItemDetail = ({data}) =>{

    const {title, year, community, genres} = data
    data.price = Math.trunc((community.have - community.want)*.8+2000)
    let stock = data.num_for_sale
    let i=0
    let imgs = []
    for(i;i<4;i++){
        imgs[i]= data.images[i].resource_url  
    }
    
    return(
        <div className="itemDetailContainer">
            <div>
                <div className="mainImg">
                    <img className="itemDetailImg" src={data.images[0].resource_url} alt={`Portada de ${title}`}/>
                </div>
                <div className="altImg">               
                    <img src={imgs[0]}/>
                    <img src={imgs[1]}/>
                    <img src={imgs[2]}/>
                    <img src={imgs[3]}/>
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
                        <ItemCounter stock={stock}/>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail