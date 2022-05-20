import React from 'react'
import {v4 as uuidv4} from "uuid"
import Todotask from "./Todotask";
import style from "./todoapp.module.css"

const Todoapp = () => {
const [newTodo,setNewTodo] = React.useState("");
const [todo,setTodo] = React.useState([]);
let onDelete =(value)=>{
  setTodo(todo.filter(el=> el.value !== value))
}

  return (
    <div className={style.outer_div}> 
    
      <input className={style.input} value ={newTodo} onChange={(e)=>{
        //console.log(e.target.value)
          setNewTodo(e.target.value)
      }}  type="text" placeholder='Add to Todo' 
      />
      <button className={style.button} onClick={()=>{
         if(newTodo.length>0){
             
          setTodo([
            ...todo,{id:uuidv4(),value:newTodo,isCompleted:false}
          ])
         
          setNewTodo("")
        }
       
      }}>+</button>
       {
         todo.map((todo)=>(
         <Todotask key={todo.id} todo={todo} onDelete={onDelete} />
        ))
       }
      
      </div>
  )
}

export default Todoapp