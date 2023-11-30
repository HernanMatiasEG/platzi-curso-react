import '../App.css';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';

// const defaultToDos = [
//   { text: 'Curso de React', completed: false },
//   { text: 'Curso de Azure DevOps', completed: true },
//   { text: 'Curso de Scrum Master', completed: true },
//   { text: 'Curso de Next.js', completed: false },
//   { text: 'Curso de Excel Avanzado', completed: false },
// ]

function App() {
  console.log('Renderiza App');
  

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
