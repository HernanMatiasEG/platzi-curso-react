import { useContext } from 'react';
import '../css/ToDoCounter.css'
import { ToDoContext } from '../ToDoContext';

function ToDoCounter() {
  console.log('Renderiza ToDoCounter');
  const {
    completed,
    total,
  } = useContext(ToDoContext);
    return (
        <>
        <p className="ToDoCounter">Se han completado <strong>{completed}</strong> de <strong>{total}</strong> tareas</p>
        <p className={`ToDosCongrats ${ (completed === total && total > 0 ) && "ToDosCongrats--active"}`}>¡Felicidades, completaste todas las tareas!</p>
        </>
    );
  }

export {ToDoCounter}