import React from 'react';
import { ToDoContext } from '../ToDoContext';
import '../css/ToDoAddButton.css'

function ToDoAddButton() {
  console.log('Renderiza ToDoAddButton');
    const {
      setShowModal
    } = React.useContext(ToDoContext);
    return (
        <button className='ToDoAddButton'
          onClick={ () => (
              setShowModal((value)=>(!value))
            )
          }>+</button>
    );
  }

export {ToDoAddButton}