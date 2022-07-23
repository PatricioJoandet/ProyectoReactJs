import '../App.css'
import Item from './Item'

const ItemListContainer = ( {section} )=>{
  
  const product1 ={
    title: "The Runaways - The Runaways",
    price: 5000,
    img: "runaways",
    stock: 2
  }
  const product2 ={
    title: "Slaves - Acts of Fear and Love",
    price: 3500,
    img: "slaves",
    stock: 4
  } 
  const product3 ={
    title: "Sublime - Sublime",
    price: 4000,
    img: "sublime",
    stock: 3
  }
  const product4 ={
    title: "Kendrick Lamar - DAMN.",
    price: 4000,
    img: "damn",
    stock: 6
  }

  return(
    <div className='itemListContainer'>
      <h1>
        {section}
      </h1>
      <div className='itemContainer'>
        <Item data={product1} />
        <Item data={product2} />
        <Item data={product3} />
        <Item data={product4} />
      </div>
    </div>
    )
}

export default ItemListContainer