import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './style.css';

const Body=(todo)=> {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [user_input, setUserInput] = useState("")
  const [todos, setToDos] = useState([])
  const addData=()=>{
    setToDos([...todos, user_input])
  }
  return (
    <div className="div_body">
      <div className="input_activity">
        <TextField onChange={(event)=> setUserInput(event.target.value)} id="outlined-basic" label="Enter Your Activity" variant="outlined" />
      </div>
      <br />
      <div className="to_do_button">
        <Button onClick={()=> addData()} variant="contained">Add</Button>
      </div>
      <div className="todo_list">
        <Card>
        <li className='todo_li_head'>To Do List</li>
        {
          todos.map((todo, index) =><li key={index} className='todo_li'>{todo}</li>)
        }
        </Card>
      </div>
    </div>
  );
}
export default Body;