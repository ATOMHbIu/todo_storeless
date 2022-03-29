import React from 'react';
import './app.css';
import Todo from "./components/Todo";

function App() {
    const ToDoList = [
        {   id:0,
            name:"Find",
            title: "Найти",
            finished: false
        },{
            id:1,
            name:"new",
            title: "новую",
            finished: false,
            description: "Задача по поиску новой работы"
        },{
            id:2,
            name:"job",
            title: "работу",
            finished: false
        }
]
    return (
        <div className="App">
            <Todo items={ToDoList}/>
        </div>
    );
}

export default App;
