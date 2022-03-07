import React from 'react'
import "../grocerylist.css"
const Todoitem = ({todo, handleDelete}) => {
  return (
    <>
      <div className="ind_product">
        <span className="title_span">
          {todo.title}
        </span>
        <button className="btn_delete" onClick={()=> {handleDelete(todo.id)}}>Delete</button>
      </div>
    </>
  )
}
export default Todoitem;