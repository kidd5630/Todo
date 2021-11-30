import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


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
      />
    <TodoList
    todoList={todoList}
    />
  </div>
}

export default Todo;