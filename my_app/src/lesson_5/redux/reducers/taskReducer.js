
import { Form } from "react-router-dom";
import { ADD_TASK, REMOVE_TASK } from "../actionTypes";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
