import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Todo from './component/Todo';

const App = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="app">
            < Todo 
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);