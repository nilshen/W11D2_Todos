import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions'

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };


export const todosReducer = (state = initialState, action) => {
   Object.freeze(state);
   const nextState = Object.assign({}, state)


    switch (action.type) {
        case RECEIVE_TODOS:
            const allTodos = action.todos.map((el)=> ({
                id:el.id, todo:el
            }))
            return allTodos
        case RECEIVE_TODO:
            console.log(action)
            nextState[action.todo.id] = action.todo
            return nextState
        default:
            return state;
    }
};

export default todosReducer;