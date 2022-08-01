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