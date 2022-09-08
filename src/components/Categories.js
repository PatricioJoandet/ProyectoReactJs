import '../App.css'
import { Link } from 'react-router-dom'

const Categories = ({cat}) => {
	

    return(
        <>
				<div className='categoriesMainContainer'>
						<div className='categoriesContainer'>
								<Link to="/category/rock"> <button className={cat==="rock"?"active":"categoriesBtn"}> Rock </button> </Link>
								<Link to="/category/pop"> <button className={cat==="pop"?"active":"categoriesBtn"}> Pop </button></Link>
								<Link to="/category/blues"> <button className={cat==="blues"?"active":"categoriesBtn"}> Blues </button></Link>
								<Link to="/category/country"> <button className={cat==="country"?"active":"categoriesBtn"}> Country </button></Link>
								<Link to="/category/electronic"> <button className={cat==="electronic"?"active":"categoriesBtn"}> Electronic </button></Link>
								<Link to="/category/jazz"> <button className={cat==="jazz"?"active":"categoriesBtn"}> Jazz </button> </Link>
								<Link to="/category/reggae"> <button className={cat==="reggae"?"active":"categoriesBtn"}> Reggae </button></Link>
						</div>
						<div className='currentCategory'>
								{cat? <h1>Mostrando: {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}</h1>:<h1>Mostrando todo</h1>}
						</div>
					</div>
        </>
    )
}

export default Categories