import Item from './Item'

const ItemList = ({dataProducts, paginationFetch, pagination, cat}) =>{

	return(
  	<div className='itemListContainer'> {/* //item list wrapper */}
			{console.log(pagination)}
				<div className='ItemList__contentWrapper'>
						{cat? <h1>Mostrando: {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}</h1>:<h1>Mostrando todo</h1>}
					<div className='ItemList__pagination'>

							<button onClick={()=>{paginationFetch(pagination.urls.first)}}>Primera</button>
							<button onClick={()=>{paginationFetch(pagination.urls.last)}}>última</button>
							<span>Página {pagination.page} de {pagination.pages}</span>
							<button onClick={()=>{paginationFetch(pagination.urls.prev)}}>Anterior</button>
							<button onClick={()=>{paginationFetch(pagination.urls.next)}}>Siguiente</button>

					</div>
					<div className='ItemList'>
					</div>
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