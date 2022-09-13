import '../App.css'
import { Container, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paginationn = ({pagination, paginationFetch}) =>{

	return(
			<Container className=' paginationControls d-flex justify-content-center mb-3 mt-3'>
				<Pagination>
					<Pagination.First  className={pagination.page===1?"disabled":""} onClick={()=>paginationFetch(pagination.urls.first)} />
					<Pagination.Prev className={pagination.page===1?"disabled":""} onClick={()=>paginationFetch(pagination.urls.prev)} /> 
					<Pagination.Item active>{pagination.page}</Pagination.Item>
					<Pagination.Next className={pagination.page===pagination.pages?"disabled":""} onClick={()=>paginationFetch(pagination.urls.next)} />
					<Pagination.Last className={pagination.page===pagination.pages?"disabled":""} onClick={()=>paginationFetch(pagination.urls.last)} />
				</Pagination>
			</Container>
  )
}

export default Paginationn