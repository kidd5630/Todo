import React, { useState } from 'react';

const TodoList = ({todoList}) => {
    return <div className="todo-list" >
    <h2>Your List</h2>
    {todoList.map(todo => {
    
     return(
       <div className="listContainer" key={todo}>
         {todo}
        </div>
     )
    })}
    </div>
  }

  export default TodoList;