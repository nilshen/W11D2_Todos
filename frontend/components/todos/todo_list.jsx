
import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


const TodoList = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>{
                props.todos.map(todo => {
                    return (
                        <TodoListItem
                        receiveTodo={props.receiveTodo}
                        todoItem={todo} 
                        key={todo.id}
                        />
                    )
                })
                } 
            </ul>
            <TodoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
}

export default TodoList;