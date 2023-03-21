import React from 'react'
import ReactDOM  from 'react-dom'
import classes from "../cssmodule/modal.module.css"
const Backdrop=props=><div  onClick={props.onClick} className={classes.backdrop}></div>
const ModalOverlay=props=><div className={classes.modal}>{props.children}</div>
const portalElement=document.getElementById("modal")
export default function Modal(props) {
  return (
    
      <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </>
  
  )
}


