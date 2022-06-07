import todosReducer from "./reducer";
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    todos: todosReducer
});


export default rootReducer;