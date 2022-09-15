import '../App.css';
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({title, close, children, show}) => {

  return(
    <>
      <Modal centered show={show}>
        <Modal.Header >
          <Modal.Title className='text-center'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal;