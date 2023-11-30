import { useContext } from 'react';
import '../css/ToDoSearch.css'
import { ToDoContext } from '../ToDoContext';

function ToDoSearch() {
  console.log('Renderiza ToDoSearch');
  const {
    searchState,
    setSearchState,
  } = useContext(ToDoContext);
    return (
        <input className="ToDoSearch" placeholder="Buscar" 
            value={searchState} 
            onChange={ (event) => setSearchState(event.target.value) } />
    );
  }

export {ToDoSearch}