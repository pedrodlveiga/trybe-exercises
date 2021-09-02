import React from 'react'
import './App.css';

const Task = (value) => {
    return (
      <li key={value}>{value}</li>
    );
}

const tarefas = ['Acordar', 'Tomar Banho', 'Tomar Café', 'Escovar os dentes'];

class TaskList extends React.Component {
    render() { 
        return ( 
            <ul> 
                { tarefas.map(tarefa => Task(tarefa)) } 
            </ul>
        );
    }
}

export default TaskList;