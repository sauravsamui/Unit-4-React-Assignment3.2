import React from "react";
import style from "./todo.module.css"
function Todotask({ todo,onDelete }) {
  const [isCompleted , setIsCompleted] = React.useState(todo.isCompleted)
  return (
    <div className={style.big_div} key={todo.id}>
      <div className={style.small_div} >
        <label className={style.container}>
         <input checked={isCompleted} type="checkbox"
         onChange={(e)=>{
          setIsCompleted(e.target.checked)
        }}
         />
         <span className={style.checkmark}></span>
         </label>
        <h3 style={{textDecoration:isCompleted?"line-through":"none",color:"black",fontWeight:"lighter",fontSize:"22px"}}>{todo.value}</h3>
      </div>
      <button className={style.button}
      onClick={()=>{
        onDelete(todo.value)
      }}
      >X</button>
    </div>
  );
}

export default Todotask;
