import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from '../actions/step_actions'

const initialState = {
    // this is the step with id = 1
    1: { 
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
      },
       // this is the step with id = 2
      2: {
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
      }
  };


export const stepsReducer = (state = initialState, action) => {
   Object.freeze(state);
   const nextState = Object.assign({}, state)


    switch (action.type) {
        case RECEIVE_STEPS:
            const allSteps = action.steps.map((el)=> ({
                id:el.id, step:el,
            }))
            return allSteps
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step
            return nextState
        case REMOVE_STEP:
            delete nextState[action.step.id]
            return nextState
        default:
            return state;
    }
};

export default stepsReducer;