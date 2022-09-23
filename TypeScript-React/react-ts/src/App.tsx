import { useState } from 'react';
import './App.css';
import Todos from './component/Todos';
import NewTodo from './component/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
