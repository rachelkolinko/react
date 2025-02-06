import { ADD_TASK, REMOVE_TASK, RESTORE_TASK, DELETE_PERMANENTLY  } from "../actionTypes";

const initialState = {
  tasks: [],
  deletedTasks: [],
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
        deletedTasks: [...state.deletedTasks, state.tasks[action.payload]],
        tasks: state.tasks.filter((_, i) => i !== action.payload),
      };
      
    case RESTORE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, state.deletedTasks[action.payload]],
        deletedTasks: state.deletedTasks.filter((_, i) => i !== action.payload),
      };
      
    case DELETE_PERMANENTLY:
      return {
        ...state,
        deletedTasks: state.deletedTasks.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
