import '../App.css'
import { Link } from 'react-router-dom'

const Categories =() => {


    return(
        <div>
            <Link to="/categories/rock"> Rock </Link>
            <Link to="/categories/pop"> Pop </Link>
            <Link to="/categories/blues"> Blues </Link>
            <Link to="/categories/country"> Country </Link>
            <Link to="/categories/electronic"> Electronic</Link>
        </div>
    )
}

export default Categories