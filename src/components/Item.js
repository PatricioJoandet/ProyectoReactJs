import '../App.css'
import ItemCounter from './ItemCounter'

const Item = ({data})=>{
    const {title, cover_image} = data
    return(
        <div className='singleItem'>
            <img src={cover_image} alt={`Imagen de ${title}`} />
            <h2>{title}</h2>
            <p></p>
            <p>En stock:</p>
            <ItemCounter />
            <button>Comprar</button>
        </div>
    )
}

export default Item