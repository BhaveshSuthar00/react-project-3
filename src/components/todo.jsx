import React, {useState} from 'react'
import TodoInput from './todoinput'
import TodoItem from "./todoitem"
import { v4 as uuid } from 'uuid'
import "../todo.css"
export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (data) => {
        const tt = {
            title  : data,
            status : false,
            id : uuid()
        }
        setTodos([...todos, tt]);
    }
    const handleDelete = (id) => {
        const deleteData = todos.map(item => item.id === id ? {...item, title : "remove"} : item);
        let newarr = [];
        for(let i =  0; i<deleteData.length; i++) {
            if(deleteData[i].title !== "remove"){
                newarr.push(deleteData[i]);
            } 
        }
        setTodos(newarr);
    }
    const handleToggle = (id) => {
        const updatedTodo = todos.map(item => item.id === id ? {...item, status : !item.status}: item)
        setTodos(updatedTodo);
    }
    return (
        <>
            <div className="todo_div_main">
                <div className="grocery_div_main_1">
                    GROCERY LIST
                </div>
                <div>
                    <TodoInput  addTodo={addTodo}/>
                </div>
            </div>
            <div className="todo_item_div">
                {todos.map((task) => (<TodoItem handleDelete={handleDelete} handleToggle={handleToggle} todo={task}/>))}
            </div>
        </>
    )
}
export default Todo;