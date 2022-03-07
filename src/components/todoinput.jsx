import React, {useState} from 'react'
import '../todo.css'
const TodoInput = ({addTodo}) => {
    const  [text, setText] = useState("");
    return (
        <>
            <div>
                <input type="text"onChange={(e) => {
                    setText(e.target.value);
                }}  />
                <button onClick={() => {
                    addTodo(text);
                }} >
                    submit
                </button>
            </div>
        </>
    )
}

export default TodoInput