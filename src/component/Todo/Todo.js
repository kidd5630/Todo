import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import DeleteAll from '../DeleteAll/DeleteAll';


const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem('ToDoList') ? JSON.parse(localStorage.getItem('ToDoList')) : [])
  function addTodo(todo) {
    const newArr = [...todoList, todo]
    setTodoList(newArr)
    localStorage.setItem('ToDoList', JSON.stringify(Array.from(newArr)))
  }

  return <div className="todo">
    <TodoForm 
      addTodo={addTodo}
      todoList={todoList}
      setTodoList={setTodoList}
      />
    <TodoList
    todoList={todoList}
    setTodoList={setTodoList}
    />
  </div>
}

export default Todo;