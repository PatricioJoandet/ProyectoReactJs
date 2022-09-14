import ItemCounter from "./ItemCounter"
import '../App.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from "./MyModal"

const ItemDetail = ({data}) =>{

  const {title, year, community, genres} = data
  data.price = Math.trunc((community.have - community.want)*.8+2000)
  let stock = data.num_for_sale
    
  const [qtySelected, setQtySelected] = useState(0)
	const [selectedImg, setSelectedImg] = useState("")
	const [showModal, setShowModal] = useState(false)
	const selectImg = (url) =>{
		setSelectedImg(url)
	}

	useEffect(()=>{
		setSelectedImg(data.images[0].resource_url)
	},[])

  return(
		<Container>
			<Row className="mt-4">
				<Col className="d-flex flex-column ">
					<Container className="">
						<Container className="d-flex justify-content-center">
							<img className="itemDetailImg" src={selectedImg} alt={`Portada de ${title}`}/>
						</Container>
						<Container className="justify-content-center altImg">            
							{data.images.slice(0,4).map(img=><img onClick={()=>selectImg(img.resource_url)} key={img.resource_url} src={img.resource_url} alt={`Imagen de ${title}`}/>)}
						</Container>
					</Container>	
				</Col>
				<Col>
					<Container className="itemDetailInfo p-5">
						<Col>
							<div className="itemDetailTexts">
								<h2>{data.artists_sort}</h2>
								<h1 className="itemDetailTitle">{title}</h1>
								<p className="itemDetailPrice">${data.price}</p>
							</div>
						</Col>
						<Col className="d-flex justify-content-center">
								<div className="d-flex flex-column align-content-center">
									<p className="text-center stock">Stock: {stock}</p>
									{qtySelected > 0 ? 
									<MyModal title="Producto Agregado al carrito" show={showModal}>
										<Link to='/cart'><Button variant="primary">Terminar Compra</Button> </Link>
										<Link to='/'><Button variant="success"> Seguir comprando</Button> </Link>
									</MyModal>
									: <ItemCounter className="d-flex flex-column" addCart={true} setShowModal={setShowModal} setQtySelected={setQtySelected} product={data} stock={stock}/>}
								</div>
						</Col>
					</Container>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="mt-4 mb-4 p-3 itemExtraInfo">
						<div>
							<details>
								<summary>INFO</summary>
									<p>Año: {year}</p>
									<p>Categorias: {genres}</p>
							</details>
						</div>
						<div>
							<details>
								<summary> Tracklist </summary>
									<p>Tracklist:</p>{data.tracklist.map(track=> <p key={`${track.position}-${track.title}`}>{track.position}-{track.title}</p>)}
							</details>
						</div>
					</div>
				</Col>
{/* 				<Col>
					<div className="mt-4 mb-4 p-3 itemExtraInfo">
						<div>
							<details>
								<summary>INFO</summary>
									<p>Año: {year}</p>
									<p>Categorias: {genres}</p>
							</details>
						</div>
						<div>
							<details>
								<summary> Tracklist </summary>
									<p>Tracklist:</p>{data.tracklist.map(track=> <p key={`${track.position}-${track.title}`}>{track.position}-{track.title}</p>)}
							</details>
						</div>
					</div>						
				</Col> */}
			</Row>
		</Container>
)}

export default ItemDetail