import Item from './Item'

const ItemList = ({dataProducts}) =>{
    return(
        <div className='itemContainer'>
            {dataProducts.map((product) =>{
                console.log(product.id)
            return <Item key={product.id} data={product} />
            })}
        </div>
    )
}

export default ItemList