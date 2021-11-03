import React from 'react'


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Academia', 'Estudar', 'Trabalhar', 'Meditar']

function App() {
  const listar = tarefas.map( tarefa => Task(tarefa)); 
  return (
    <div>
      <ul>{ listar } </ul>
   
      {/* { Task }       */}
    </div>
  );
}

export default App;
