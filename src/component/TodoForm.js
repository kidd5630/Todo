import React, { useState } from 'react';

const TodoForm = ({todoList, setTodoList}) => {

    const[newTodo, setNewTodo] = useState('');

    function add(e){
        e.preventDefault();
        setTodoList([...todoList, newTodo]);
        resetForm();
    }

    function resetForm() {
        setNewTodo('');
    }

    return (
        <div className="todo-list">
        <h1 className="formTitle">What Needs To Be Done?</h1>
        <form className="addnewTodo" onSubmit={add}>
            <div>
                <input className="listnewTodo"
                    type="text"
                    placeholder="Action for List"
                    value={newTodo}
                    required
                    onChange={(event) => {
                        setNewTodo(event.target.value);
                    }}
                />
            </div>
            <button className="submit"
                type="submit">Add
            </button>
        </form>
        </div>
    )
}

export default TodoForm;