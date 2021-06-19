import React, { useReducer, useState, useEffect } from "react";
import { AiOutlineClear } from "react-icons/ai";
import Tasks from "./tasks";
import {
  addNewTask,
  changeAlertState,
  clearTasks,
  removeTask,
  editTask,
  loadTasks,
} from "./tasks.actions";
import Alert from "../grocery-list/alert";
import { setAlert, removeTaskFromList, editTaskFromList } from "./tasks.utils";

const INITIAL_STATE = {
  tasks: [],
  alert: {
    show: false,
    message: "",
    type: "",
  },
  isEditing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        alert: setAlert(true, "Task has been added", "success"),
      };

    case "EDIT_TASK":
      return {
        ...state,
        isEditing: true,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
        alert: setAlert(true, "Task has changed succesfull 🌈", "success"),
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: removeTaskFromList(state.tasks, action.payload),
        alert: setAlert(true, "Task has been deleted 💣", "success"),
      };

    case "LOAD_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };

    case "NO_VALUE":
      return {
        ...state,
        alert: setAlert(true, "You must enter task name!", "error"),
      };
    case "CHANGE_ALERT":
      return {
        ...state,
        alert: setAlert(false),
      };
    case "CLEAR_TASKS":
      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  }
};
const getLocalStorageList = () => {
  let task = localStorage.getItem("tasks");
  if (task) return JSON.parse(localStorage.getItem("tasks"));
  return [];
};

const TasksTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [editingTaskID, setEditingTaskID] = useState(null);

  useEffect(() => {
    dispatch(loadTasks(getLocalStorageList()));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const editTaskFromList = (item) => {
    const taskToEdit = state.tasks.find(
      (taskToFind) => taskToFind.id === item.id
    );
    setEditingTaskID(taskToEdit.id);
    setInputValue(taskToEdit.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTaskID === null) {
      if (inputValue) {
        const newItem = {
          id: new Date().getTime().toString(),
          title: inputValue,
        };
        dispatch(addNewTask(newItem));
        setInputValue("");
      } else {
        alert("Value cannot be empty!");
      }
    } else {
      const editingItem = state.tasks.find((task) => task.id === editingTaskID);

      const newItem = { ...editingItem, title: inputValue };

      dispatch(editTask(newItem));
      setInputValue("");
      setEditingTaskID(null);
    }
  };

  const clearAllTasks = () => {
    dispatch(clearTasks());
  };

  const removeTaskFromList = (taskIdToRemove) => {
    dispatch(removeTask(taskIdToRemove));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="tasks-list-section">
      <h3 className="tasks__title">tasks List </h3>
      {state.alert.show && (
        <Alert
          {...state.alert}
          removeAlert={() => dispatch(changeAlertState())}
        />
      )}
      <form onSubmit={handleSubmit} className="tasks__form">
        <input
          type="text"
          value={inputValue}
          placeholder="e.g homework"
          className="tasks__input"
          onChange={handleChange}
        />
        <button type="submit" className="tasks__submit-btn">
          {editingTaskID ? "edit" : "submit"}
        </button>
      </form>
      {state.tasks.length > 0 && (
        <div className="tasks__container">
          <Tasks
            listItems={state.tasks}
            removeTask={removeTaskFromList}
            editTask={editTaskFromList}
          />
          <button className="tasks__clear-btn" onClick={clearAllTasks}>
            <AiOutlineClear />
          </button>
        </div>
      )}
    </div>
  );
};

export default TasksTodo;
