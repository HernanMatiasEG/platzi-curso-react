import React, { useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext()

function ToDoProvider({children}){

    // const storageToDos = useLocalStorage('ToDoStorage_v1',[]);

    const [searchState, setSearchState] = React.useState('');
    const todoStorage = useRef('ToDoStorage_v1');
    const todoInitialValue = useRef([]);

    const {
        itemStorage: toDoState,
        saveItem: setToDoState,
        storageLoading,
        storageError,
    } = useLocalStorage(todoStorage.current,todoInitialValue.current);

    const [showModal, setShowModal] = React.useState(false);

    const toDoShow = toDoState.filter((toDo) => toDo.text.toLowerCase().includes(searchState.toLowerCase()));
    const completed = toDoState.filter((toDo) => toDo.completed).length;
    const total = toDoState.length;

    const todoAdd = (text) => {
        var newTodo = [...toDoState];
        var findToDo = newTodo.find((todo) => todo.text === text);
        console.log(findToDo);
        if(findToDo){
            alert('Ya existe la tarea');
        }else{
            newTodo.push({text:text,completed:false});
            setToDoState(newTodo);
        }
    }

    const todoCompleted = (text) => {
        var newTodo = [...toDoState];
        var CompletedTodoIndex = newTodo.findIndex((todo) => todo.text === text);
        if(newTodo[CompletedTodoIndex].completed){
        newTodo[CompletedTodoIndex].completed = false;
        }else{
        newTodo[CompletedTodoIndex].completed = true;
        }
        setToDoState(newTodo);
    }

    const todoDeleted = (text) => {
        var newTodo = [...toDoState];
        var DeletedTodoIndex = newTodo.findIndex((todo) => todo.text === text);
        newTodo.splice(DeletedTodoIndex,1);
        setToDoState(newTodo);
    }
    
    return (
        <ToDoContext.Provider value={{
            searchState,
            setSearchState,
            toDoShow,
            toDoState,
            setToDoState,
            todoAdd,
            todoCompleted,
            todoDeleted,
            completed,
            total,
            storageLoading,
            storageError,
            showModal,
            setShowModal,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext, ToDoProvider}