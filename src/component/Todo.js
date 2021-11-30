import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo = ({todoList, setTodoList}) => {

  return <div className="todo">
    <TodoForm 
      todoList={todoList}
      setTodoList={setTodoList}
      />
    <TodoList
    todoList={todoList}
    />
  </div>
}

export default Todo;