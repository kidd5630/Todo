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

   <Button className='clearAll' variant="outlined" onClick={clear} style={{color: 'black', border: '2px solid black', width: '25%',}}>Clear All</Button>
   )
}

export default DeleteAll;

