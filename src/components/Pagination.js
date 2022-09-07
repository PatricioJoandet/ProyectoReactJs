import '../App.css'
import { useState } from 'react'


const Pagination = ({pages, setPages, setListProducts}) =>{

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(200)

    async function paginationFetch(url){
        let call = await fetch(url)
        let resp = await call.json()
        setListProducts(resp.results)
        await setPages(resp.pagination.urls)
        setCurrentPage(resp.pagination.page)
        await setTotalPages(resp.pagination.pages)
      }

    return(
        <div className='paginationContainer'>
            <div className='paginationFirstLast'>
                <button onClick={()=>paginationFetch(pages.last)}>Última</button>
                <button onClick={()=>paginationFetch(pages.first)}>Primera</button>
            </div>
            <div className='paginationNextPrev'>
                <span>{`Página ${currentPage} de ${totalPages} `} </span>
                <button onClick={()=>paginationFetch(pages.prev)}>Anterior</button>
                <button onClick={()=>paginationFetch(pages.next)}>Siguiente</button>
            </div>
        </div>

    )
}


export default Pagination