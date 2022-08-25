import '../App.css'
import CloseIcon from '../img/close.svg'
const Modal = ({title, close, children}) => {
  return(
    <div className='modal'>
      <h2>{title}</h2>
      <img src={CloseIcon} onClick={()=> close(false)}/>
      {children}
    </div>
  )
}

export default Modal