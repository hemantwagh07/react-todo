import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todo
                            key={todo.id}
                            setTodos={setTodos}
                            text={todo.text}
                            todo={todo}
                            todos={todos}
                        />
                    ))
                }

            </ul>
        </div>
    )
}
