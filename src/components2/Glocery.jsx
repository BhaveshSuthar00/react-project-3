import React, {useState} from 'react'
import TodoInput from './GloceryInput'
import TodoItem from "./GloceryList"
import { v4 as uuid } from 'uuid'
import "../grocery.css"
export const Todo = () => {
    const [grocery, setGrocery] = useState([]);
    const addTodo = (data) => {
        const tt = {
            title  : data,
            status : false,
            id : uuid()
        }
        setGrocery([...grocery, tt]);
    }
    const handleDelete = (id) => {
        const deleteData = grocery.map(item => item.id === id ? {...item, title : "remove"} : item);
        let newarr = [];
        for(let i =  0; i<deleteData.length; i++) {
            if(deleteData[i].title !== "remove"){
                newarr.push(deleteData[i]);
            } 
        }
        setGrocery(newarr);
    }
    return (
        <>
            <div className="grocery_div_main">
                <div className="grocery_div_main_1">
                    GROCERY LIST
                </div>
                <div>
                    <TodoInput  addTodo={addTodo}/>
                </div>
            </div>
            <div className="todo_item_div">
                {grocery.map((task) => (<TodoItem handleDelete={handleDelete} todo={task}/>))}
            </div>
        </>
    )
}
export default Todo;