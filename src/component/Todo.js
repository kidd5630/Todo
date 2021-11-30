import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo = (props) => {
  return <div className="todo">
    <TodoForm />
    <TodoList />
  </div>
}

export default Todo;