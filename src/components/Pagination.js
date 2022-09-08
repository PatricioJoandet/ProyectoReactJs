import '../App.css'
import { useState } from 'react'


const Pagination = ({pagination, paginationFetch}) =>{

    return(
        <div className='paginationContainer'>
            <div className='paginationControls'>
                <button onClick={()=>paginationFetch(pagination.urls.first)}> {`<<`} </button>
                <button onClick={()=>paginationFetch(pagination.urls.prev)}> {`<`} </button>
                <span> Página {pagination.page} de {pagination.pages}</span>
                <button onClick={()=>paginationFetch(pagination.urls.next)}> {`>`} </button>
                <button onClick={()=>paginationFetch(pagination.urls.last)}> {`>>`} </button>
            </div>
        </div>

    )
}

export default Pagination