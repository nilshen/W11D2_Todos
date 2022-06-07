import todosReducer from "./reducer";
import stepsReducer from "./steps_reducer";

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer
});


export default rootReducer;