import '../App.css'
import { Link } from 'react-router-dom'

const Item = ({ data, customClass})=>{
    const {title, cover_image, community, id, price} = data
    data.stock = Math.trunc((community.have+community.want)/40)
    
    return(
      <Link to={`/productos/${id}`}>
          <div className='singleItem'>
              <img src={cover_image || data.images[0].resource_url} alt={`Imagen de ${title}`} />
              <h2>{title}</h2>
              <p>{price}</p>
          </div>
      </Link>
    )
}

export default Item