import '../App.css'
import { useState } from 'react'


const Pagination = ({pages, setPages, setListProducts}) =>{

    const [currentPage, setCurrentPage] = useState(1)

    async function paginationFetch(url){
        let call = await fetch(url)
        let resp = await call.json()
        setListProducts(resp.results)
        await setPages(resp.pagination.urls)
        setCurrentPage(resp.pagination.page)
      }

    return(
        <div >
            <div className='pagination'>
                <button onClick={()=>paginationFetch(pages.last)}>last</button>
                <button onClick={()=>paginationFetch(pages.first)}>first</button>
                <button onClick={()=>paginationFetch(pages.prev)}>prev</button>
                <button onClick={()=>paginationFetch(pages.next)}>next</button>
            </div>
            <div className='paginationPage'>
                <span>{`Página ${currentPage} `} </span>
            </div>
        </div>

    )
}


export default Pagination