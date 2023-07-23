import React from 'react'
import { useState } from 'react';
const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task);

  const handleSubmit=e=>{
    //prevent default action of loading when form is submitted
      e.preventDefault();
      //edit todo
      editTodo(value,task.id);
  }
return (
  <form className='TodoForm' onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder='Update Task'
      value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button class="todo-btn" type='submit'>Update Task</button>
  </form>
)
}

export default EditTodoForm