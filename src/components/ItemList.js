import Item from './Item'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({dataProducts}) =>{
	return(

  	<Container>
				<Row>
					<Col className="d-flex flex-row flex-wrap justify-content-center text-center">
						{dataProducts.map((product) =>{
							return (
									<Item key={product.id} data={product} />
							)
						})}
					</Col>
				</Row>
			
  	</Container>
  )
}

export default ItemList