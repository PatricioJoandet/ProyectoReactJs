import Item from './Item'

const ItemList = ({dataProducts}) =>{

	return(
  	<div className='itemListContainer'> {/* //item list wrapper */}
				<div className='ItemList__contentWrapper'>
					<div className='ItemList__content'>
						{dataProducts.map((product) =>{
							return <Item key={product.id} data={product} />
						})}
					</div>
				</div>
			
  	</div>
  )
}

export default ItemList