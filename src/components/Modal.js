import ReactDOM from "react-dom";
import '../css/Modal.css';

function Modal({children}){
    return (ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal'))
    );
}

export {Modal}