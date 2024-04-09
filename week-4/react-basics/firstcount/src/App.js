import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Buy groceries",
      description: "from jio before 7 pm",
      completed: false
    },
    {
      task: "Do DSA",
      description: "3pm to 4pm",
      completed: false
    }
  ]);

  const changeState = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      {todos.map((ele, index) => (
        <div key={index}>
          <div>{ele.task}</div>
          <div>{ele.description}</div>
          <button onClick={() => changeState(index)}>
            {ele.completed ? "Done" : "Mark as done"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
