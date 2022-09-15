import '../App.css'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

const SearchBar = () =>{

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) =>{
    setSearch(e.target.value)
    if(e.which === 13){
      console.log("a")
      if(search){
        setSearch("")
        navigate("/search/" + search)
      }else{
        return
      }
    }
  }
  return(
    <div>
      <div>
        <input type="text" placeholder='Buscar' value={search} onChange={(e)=>{setSearch(e.currentTarget.value)}} onKeyUp={handleSearch}></input>
        <Link to={"/search/" + search} onClick={e=>{
          if(search){
            setSearch("")
          }else{
            e.preventDefault()
          }
        }} className="searchIcon">
        <i>aa</i></Link>

      </div>
    </div>
  )
}

export default SearchBar