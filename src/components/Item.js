import '../App.css'
import { Link } from 'react-router-dom'

const Item = ({ data})=>{
    const {title, cover_image, community, id} = data
    data.price = Math.trunc((community.have - community.want)*.8+2000)
    data.stock = Math.trunc((community.have+community.want)/40)

    return(
      <Link to={`/productos/${id}`}>
          <div className='singleItem'>
              <img src={cover_image} alt={`Imagen de ${title}`} />
              <h2>{title}</h2>
          </div>
      </Link>
    )
}

export default Item