import React, {useState} from 'react'
import '../groceryinput.css'
const TodoInput = ({addTodo}) => {
    const  [text, setText] = useState("");
    return (
        <>
            <div className="input_container">
                <input type="text"onChange={(e) => {
                    setText(e.target.value);
                }}  />
                <button className="button-64" onClick={() => {
                    addTodo(text);
                }} >
                    submit
                </button>
            </div>
        </>
    )
}

export default TodoInput