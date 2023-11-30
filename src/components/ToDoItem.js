import '../css/ToDoItem.css'
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function ToDoItem(props) {
    console.log('Renderiza ToDoItem');
    return (
        <li className='ToDoItem'>
            <FaCheck className={`ToDoItem-Icon ${props.completed && "ToDoItem-Icon--active"}`} onClick={props.onComplete} />
            <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--completed"}`}>{props.text}</p>
            <FaTimes className='ToDoItem-IconDelete' onClick={props.onDelete} />
        </li>
    );
  }

export {ToDoItem}