import '../App.css'


const Item = ({data})=>{
    const {title, cover_image, community} = data
    data.price = Math.trunc((community.have - community.want)*.8+2000)
    data.stock = Math.trunc((community.have+community.want)/40)

    return(
        <div className='singleItem'>
            <img src={cover_image} alt={`Imagen de ${title}`} />
            <h2>{title}</h2>
        </div>
    )
}

export default Item