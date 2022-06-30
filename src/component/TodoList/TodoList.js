import ClearIcon from '@mui/icons-material/Clear';
import Checkbox from '@mui/material/Checkbox';
import './todoList.css'


const TodoList = ({todoList, setTodoList}) => {
  let selected;

  window.onload=function(){
  var list = document.querySelector('ul');
    if(list){
      list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
    }
  }
  
  const Removehandler = (e) => {
    e.preventDefault()
    let filtered = todoList.filter((word) => word !== selected)
    localStorage.setItem('ToDoList', JSON.stringify(Array.from(filtered)))
    setTodoList(filtered);
  }

  if(todoList.length > 0){
    return (<div className="todo-list" >
    <h2 className='listTitle'>Your List</h2>
    <ul className='taskList'>
      {todoList.map(todo => {
     return(
       <li key={todo}>
        {todo}  
          <div className='options'>
            <button 
              onClick={(e) => {}}
              style={{background: 'transparent'}}>
              <Checkbox 
              style={{
                background: 'transparent',
                color: '#0F989D'
              }}/>
            </button>
            <button 
              onClick={(e) => {selected= todo;Removehandler(e)}}
              style={{background: 'transparent'}}>
              <ClearIcon 
                elevation={0}
                style={{
                  color: '#0F989D',
                  fontSize: '25px',
                }}/>
            </button>
          </div>
        </li>
     )
    })}
    </ul>
    </div>)
  }else{
    return <div className="todo-list" >
    <h2 className='listTitle'>Your List Is Empty</h2>
    </div>
  }
    
}

export default TodoList;