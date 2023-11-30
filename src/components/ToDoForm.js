import React from "react";
import '../css/ToDoForm.css'
import { ToDoContext } from "../ToDoContext";

function ToDoForm(){

    const [toDoText, setToDoText] = React.useState('');

    const {
        todoAdd,
        setShowModal
    } = React.useContext(ToDoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        todoAdd(toDoText);
        setShowModal(false);
    }

    const onCancel = () => {
        setShowModal(false);
    }

    return (
        <form onSubmit={onSubmit} className="todoForm">
            <label>Nueva Tarea</label>
            <textarea onChange={(event) => {
                setToDoText(event.target.value);
            }} value={toDoText} placeholder="Completar tareas" />
            <div className="todo-button-container">
                <button type="button" onClick={onCancel} className="todo-button todo-button--cancel">Cancelar</button>
                <button type="submit" className="todo-button todo-button--add">Añadir</button>
            </div>
        </form>
    );
}

export {ToDoForm}