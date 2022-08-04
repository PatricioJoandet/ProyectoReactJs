import '../App.css'
import { Link } from 'react-router-dom'

const Categories =() => {


    return(
        <div className='categoriesContainer'>
            <Link to="/category/rock"> <button className='categoryBtn'> Rock </button> </Link>
            <Link to="/category/pop"> <button className='categoryBtn'> Pop </button></Link>
            <Link to="/category/blues"> <button className='categoryBtn'> Blues </button></Link>
            <Link to="/category/country"> <button className='categoryBtn'> Country </button></Link>
            <Link to="/category/electronic"> <button className='categoryBtn'> Electronic </button></Link>
            <Link to="/category/jazz"> <button className='categoryBtn'> Jazz </button> </Link>
            <Link to="/category/reggae"> <button className='categoryBtn'> Reggae </button></Link>
        </div>
    )
}

export default Categories