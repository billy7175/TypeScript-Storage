import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContedtProvider from './store/todos-context';

function App() {
  return (
    <TodosContedtProvider>
      <NewTodo  />
      <Todos  />
    </TodosContedtProvider>
  );
}

export default App;
