import '../App.css'
import Item from './Item'

const ItemListContainer = ( {section} )=>{
  return(
    <div className='itemListContainer'>
      <h1>
        {section}
      </h1>
      <div className='itemContainer'>
        <Item img="runaways" title="The Runaways - The Runaways" price={`$5000`} />
        <Item img="slaves" title="Slaves - Acts of Fear and Love" price={`$3500`} />
        <Item img="sublime" title="Sublime - Sublime" price={`$3000`} />
        <Item img="damn" title="Kendrick Lamar - DAMN." price={`$4000`} />
      </div>
    </div>
    )
}

export default ItemListContainer