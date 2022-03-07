import React from 'react'
import "../todoitem.css"
const Todoitem = ({todo, handleToggle, handleDelete}) => {
  return (
    <>
      <div className="ind_product">
        <span className="title_span">
          {todo.title}
        </span>
        <span className="title_span2">Status : {todo.status ? "done" : 'not done'} </span>
        <button className="btn_status" onClick={()=> {handleToggle(todo.id)}}>
          {todo.status ? "true" : "false"}
        </button>
        <button className="btn_delete" onClick={()=> {handleDelete(todo.id)}}>Delete</button>
      </div>
    </>
  )
}
export default Todoitem;