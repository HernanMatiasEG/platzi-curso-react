import '../css/ToDoLoading.css'

function ToDoLoading(){
    return (
        <li className='ToDoItem-loading'>
            <span className="ToDoItem-loading-Icon"></span>
            <p className="ToDoItem-loading-p"></p>
            <span className="ToDoItem-loading-IconDelete"></span>
        </li>
    );
}

export {ToDoLoading}