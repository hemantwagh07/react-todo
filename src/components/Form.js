import React from 'react'

export default function Form({ setInputText, todos, setTodos, inputText, setStatus }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
            setInputText('')
        }
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
