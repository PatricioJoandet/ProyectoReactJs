import ItemCounter from "./ItemCounter"
import '../App.css'


const ItemDetail = ({data}) =>{

    const {title, year, community} = data
    data.price = Math.trunc((community.have - community.want)*.8+2000)
    data.stock = Math.trunc((community.have+community.want)/40)



    return(
        <div className="itemDetailContainer">
            <div>
                <div>
                    <img className="itemDetailImg" src={data.images[0].resource_url} alt={`Portada de ${title}`}/>
                </div>
            </div>
            <div className="itemDetailInfo">
                <div>
                    <h1 className="itemDetailTitle">{title}</h1>
                </div>
                <div className="itemExtraInfo">
                    <p>Año: {year}</p>
                    <p>Categorias:</p>
                    <p></p>
                </div>
                <div>
                    <p className="itemDetailPrice">${data.price}</p>
                    <div className="stockCount">
                        <p>Stock: {data.stock}</p>
                        <ItemCounter stock={data.stock}/>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail