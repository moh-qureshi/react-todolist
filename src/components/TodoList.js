import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        const newTodos = [todo,...todos]
        setTodos(newTodos)
        if(newTodos.length >= 4){
            document.body.style.height = "fit-content"
        }
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) =>{
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    } 

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    
    return(
        <div className="app">
            <h1 className="title">Todo List Creator</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList