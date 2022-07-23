import '../App.css'
import ItemCounter from './ItemCounter'

const Item = ({data})=>{
    const {title, price, img, stock} = data
    return(
        <div className='singleItem'>
            <img src={require(`../img/${img}.png`)} alt={`Imagen de ${title}`} />
            <h2>{title}</h2>
            <p>{price}</p>
            <p>En stock: {stock}</p>
            <ItemCounter stock={stock} />
            <button>Comprar</button>
        </div>
    )
}

export default Item