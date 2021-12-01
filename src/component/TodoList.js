import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const TodoList = ({todoList}) => {

  window.onload=function(){
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
  }


  const Removehandler = (e) => {
    e.preventDefault()
    console.log("removed")
  }

  if(todoList.length > 0){
    return (<div className="todo-list" >
    <h2>Your List</h2>
    <ul>
      {todoList.map(todo => {
     return(
       <li>
        {todo}  
        <button onClick={e => Removehandler(e)}><ClearIcon /> </button>
        </li>
     )
    })}
    </ul>
    </div>)
  }else{
    return <div className="todo-list" >
    <h2>Your List Is Empty</h2>
    </div>
  }
    
}

  export default TodoList;