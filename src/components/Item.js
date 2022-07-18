import '../App.css'

const Item = ({img, title, price})=>{
    return(
        <div className='singleItem'>
            <img src={require(`../img/${img}.png`)} alt={`Imagen de ${title}`} />
            <h2>{title}</h2>
            <p>{price}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item