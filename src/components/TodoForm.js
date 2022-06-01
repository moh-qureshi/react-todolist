import React, {useState, useEffect, useRef} from "react";

function TodoForm(props){
    const [input, setInput] = useState("")
    const autoFocus = useRef(null)
    useEffect(()=>{
        autoFocus.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput("")
    }
    return(
        <form className="todo-form" onSubmit={handleSubmit}>

            <input type="text" placeholder="Add Todo" value={input} name="text" className="todo-input" onChange={handleChange} ref={autoFocus} autoComplete="null">
            </input>
            <button className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm