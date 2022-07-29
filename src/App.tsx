import React from 'react';
import './App.css';
import ContainerCounter from './containers/ContainerCounter';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="App">
      <ContainerCounter/>
      <TodoApp />
    </div>
  );
}

export default App;
