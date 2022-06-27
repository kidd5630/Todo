import React, { useState } from 'react';
import DeleteAll from '../DeleteAll/DeleteAll';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './todoForm.css'

const TodoForm = ({todoList, setTodoList, addTodo}) => {


    const ariaLabel = { 'aria-label': 'description' };

    const[newTodo, setNewTodo] = useState('');

    function add(e){
        e.preventDefault();
        if(newTodo.length === 0){
            alert('Please add a task')
        }else{ 
            addTodo(newTodo);
            resetForm();
        }
       
    }

    function resetForm() {
        setNewTodo('');
    }

    return (

        <div className="todoForm">
            <h1 className="title">What Needs To Be Done?</h1>
            <form className="form" onSubmit={add}>
                <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch', borderRadius: '3%',  padding: '2px', backgroundColor:  '#DEDEDE', color: 'black'}
                    }}
                    noValidate
                    autoComplete="off"
                    onChange={(event) => {
                        setNewTodo(event.target.value);
                    }}
                    >
                    <Input className='input' 
                        value= { newTodo } variant="filled" label="Action for List" inputProps={ariaLabel} />
        
                    <button className="submit"
                        type="submit"
                        onClick={add}
                    >
                        <AddIcon />
                     </button>
                </Box>
                </div>
            </form>
            <DeleteAll 
             todoList={todoList}
             setTodoList={setTodoList}/>
        </div>
    )
}

export default TodoForm;