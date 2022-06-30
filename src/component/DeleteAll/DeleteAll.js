import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './deleteAll.css'

const DeleteAll = ({setTodoList}) => {
    function clear(e){
        e.preventDefault();
        localStorage.removeItem('ToDoList')
        setTodoList([]);
    }
 return(
    <Button 
        className='clearAll' 
        variant="outlined" 
        onClick={clear}
        style={{
            color: '#0F989D',
            border: '1px solid #0F989D',
            width: '25%',
            marginLeft: '5px'
        }}>
            Clear All
    </Button>
   )
}

export default DeleteAll;
