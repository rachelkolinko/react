
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addTask, removeTask } from "./taskSlice";
import { addTask, removeTask} from "../redux/actions";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">רשימת משימות</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {task}
            <button
              className="bg-red-500 text-black px-2 py-1 rounded"
              onClick={() => dispatch(removeTask(index))}
            >
              הסר
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="הוסף משימה חדשה"
          className="border p-2 flex-1 rounded" />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-black px-4 py-2 ml-2 rounded"
        >
          הוסף
        </button>
      </div>
    </div>
  );
}

export default TodoList;
