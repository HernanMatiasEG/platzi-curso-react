import { ToDoList } from '../components/ToDoList';
import { ToDoItem } from '../components/ToDoItem';
import { ToDoSearch } from '../components/ToDoSearch';
import { ToDoCounter } from '../components/ToDoCounter';
import { ToDoAddButton } from '../components/ToDoAddButton';
import { ToDoContext } from '../ToDoContext';
import React from 'react';
import { ToDoLoading } from '../components/ToDoLoading';
import { ToDoError } from '../components/ToDoError';
import { ToDoEmpty } from '../components/ToDoEmpty';
import { Modal } from '../components/Modal';
import { ToDoForm } from '../components/ToDoForm';
import { ToDoChart } from '../components/ToDoChart';

function AppUI(){
    const {
        toDoShow,
        toDoState,
        setToDoState,
        todoCompleted,
        todoDeleted,
        storageLoading,
        storageError,
        total,
        showModal,
    } = React.useContext(ToDoContext);
    return (
    <div id='ToDoPanels'>
        <div id='leftPanel' className='panel'>
            <ToDoSearch />
            <ToDoList>
            {storageLoading && 
                (<>
                <ToDoLoading />
                <ToDoLoading />
                <ToDoLoading />
                </>
                )
            }
            {storageError && <ToDoError />}
            {(!storageLoading && total===0) && <ToDoEmpty />}

            {toDoShow.map((ToDo) => (
                <ToDoItem 
                key={ToDo.text}
                text={ToDo.text}
                completed={ToDo.completed}
                toDoState={toDoState}
                setToDoState={setToDoState}
                onComplete={() => todoCompleted(ToDo.text)}
                onDelete={() => todoDeleted(ToDo.text)}
                />
            ))}
            </ToDoList>
        </div>
        <div id='rightPanel' className='panel'>
            <ToDoAddButton />
            <ToDoCounter />
            <ToDoChart />
            {showModal && (<Modal>
                <ToDoForm />
            </Modal>)}
        </div>
    </div>
    );
}

export {AppUI};
