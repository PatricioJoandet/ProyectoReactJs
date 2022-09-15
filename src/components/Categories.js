import '../App.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = ({cat, searchId}) => {
    return(
        <Container>
				<div>
						<div className='categoriesContainer'>
								<Link to="/category/rock"> <button className={cat==="rock"?"activeCat":"categoriesBtn"}> Rock </button> </Link>
								<Link to="/category/pop"> <button className={cat==="pop"?"activeCat":"categoriesBtn"}> Pop </button></Link>
								<Link to="/category/blues"> <button className={cat==="blues"?"activeCat":"categoriesBtn"}> Blues </button></Link>
								<Link to="/category/country"> <button className={cat==="country"?"activeCat":"categoriesBtn"}> Country </button></Link>
								<Link to="/category/electronic"> <button className={cat==="electronic"?"activeCat":"categoriesBtn"}> Electronic </button></Link>
								<Link to="/category/jazz"> <button className={cat==="jazz"?"activeCat":"categoriesBtn"}> Jazz </button> </Link>
								<Link to="/category/reggae"> <button className={cat==="reggae"?"activeCat":"categoriesBtn"}> Reggae </button></Link>
						</div>
						<div className="text-center">
								{searchId?<h1>Busqueda: {searchId}</h1> : (cat? <h1>Mostrando: {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}</h1>:<h1>Mostrando todo</h1>)}
						</div>
					</div>
        </Container>
    )
}

export default Categories