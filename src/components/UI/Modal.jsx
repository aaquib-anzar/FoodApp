import { Link } from 'react-router-dom'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const BackDrop = (props) => {
    return <Link to ='/'><div className={classes.backdrop}  onClick={props.onClose}/></Link>

}

const ModalOverLay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalElment = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}/>,portalElment)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElment)}
        </>
    )
}
export default Modal