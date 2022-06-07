import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import {todosReducer} from '/frontend/reducers/reducer'
import {receiveTodos} from'./actions/todo_actions'
import {receiveTodo} from'./actions/todo_actions'
import {removeTodo} from'./actions/todo_actions'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    // window.todosReducer = todosReducer;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;

    ReactDOM.render(<h1>Todos App</h1>, root);

});