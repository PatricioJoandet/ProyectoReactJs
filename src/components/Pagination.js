import '../App.css'

const Pagination = ({pages, setPages, setListProducts}) =>{

    
    async function paginationFetch(url){
        let call = await fetch(url)
        let resp = await call.json()
        setListProducts(resp.results)
        await setPages(resp.pagination.urls)
      }

    return(
        <>
            <button onClick={()=>paginationFetch(pages.next)}>next</button>
            <button onClick={()=>paginationFetch(pages.prev)}>prev</button>
            <button onClick={()=>paginationFetch(pages.last)}>last</button>
            <button onClick={()=>paginationFetch(pages.first)}>first</button>
        
        </>
    )
}


export default Pagination