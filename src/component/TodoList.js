import React, { useState } from 'react';

const TodoList = ({todoList}) => {
  if(todoList.length > 0){
    return (<div className="todo-list" >
    <h2>Your List</h2>
      {todoList.map(todo => {
     return(
       <div className="listContainer" key={todo}>
         {todo}
        </div>
     )
    })}
    </div>)
  }else{
    return <div className="todo-list" >
    <h2>Your List Is Empty</h2>
      
    </div>
  }
    
  }

  export default TodoList;