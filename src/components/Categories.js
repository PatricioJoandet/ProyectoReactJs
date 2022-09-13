import '../App.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = ({cat}) => {
	

    return(
        <Container>
				<div>
						<div className='categoriesContainer'>
								<Link to="/category/rock"> <button className={cat==="rock"?"activee":"categoriesBtn"}> Rock </button> </Link>
								<Link to="/category/pop"> <button className={cat==="pop"?"activee":"categoriesBtn"}> Pop </button></Link>
								<Link to="/category/blues"> <button className={cat==="blues"?"activee":"categoriesBtn"}> Blues </button></Link>
								<Link to="/category/country"> <button className={cat==="country"?"activee":"categoriesBtn"}> Country </button></Link>
								<Link to="/category/electronic"> <button className={cat==="electronic"?"activee":"categoriesBtn"}> Electronic </button></Link>
								<Link to="/category/jazz"> <button className={cat==="jazz"?"activee":"categoriesBtn"}> Jazz </button> </Link>
								<Link to="/category/reggae"> <button className={cat==="reggae"?"activee":"categoriesBtn"}> Reggae </button></Link>
						</div>
						<div className="text-center">
								{cat? <h1>Mostrando: {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}</h1>:<h1>Mostrando todo</h1>}
						</div>
					</div>
        </Container>
    )
}

export default Categories