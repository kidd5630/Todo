import ClearIcon from '@mui/icons-material/Clear';


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
  }}
  
  const Removehandler = (e) => {
    e.preventDefault()
    let filtered = todoList.filter((word) => word !== selected)
    localStorage.setItem('ToDoList', JSON.stringify(Array.from(filtered)))
    setTodoList(filtered);
  }

  if(todoList.length > 0){
    return (<div className="todo-list" >
    <h2>Your List</h2>
    <ul>
      {todoList.map(todo => {
     return(
       <li key={todo}>
        {todo}  
        <button onClick={(e) => {selected= todo;Removehandler(e)}}><ClearIcon /> </button>
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