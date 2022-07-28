import ItemCounter from "./ItemCounter"
import '../App.css'

const ItemDetail = ({data}) =>{

    const {title, price, img, artist, stock} = data

    return(
        <div className="itemDetailContainer">
            <div>
                <div>
                    <img className="itemDetailImg" src={require(`../img/${img}.png`)} alt={`Portada de ${title}`}/>
                </div>
                <div className="player">
                    <iframe src="https://open.spotify.com/embed/album/5DVNCzpvDrSEIFiU7hm8ey?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
            <div className="itemDetailInfo">
                <div>
                    <h1 className="itemDetailTitle">{title}</h1>
                    <p>{artist} </p>
                </div>
                <div>
                    <p className="itemDetailPrice">{price}</p>
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