import '../css/ToDoList.css'

function ToDoList(props) {
  console.log('Renderiza ToDoList');
    return (
      <ul className='ToDoList'>
        {props.children}
      </ul>
    );
  }

export {ToDoList}