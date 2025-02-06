import { Form } from "react-router-dom";
import { ADD_TASK, REMOVE_TASK, DELETE_PERMANENTLY, RESTORE_TASK} from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (index) => ({
  type: REMOVE_TASK,
  payload: index,
});

export const restoreTask = (index) => ({
  type: RESTORE_TASK,
  payload: index,
});

export const deletePermanently = (index) => ({
  type: DELETE_PERMANENTLY,
  payload: index,
});
