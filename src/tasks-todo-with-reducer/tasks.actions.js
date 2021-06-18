export const addNewTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const changeAlertState = () => ({
  type: "CHANGE_ALERT",
});

export const clearTasks = () => ({
  type: "CLEAR_TASKS",
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const removeTask = (task) => ({
  type: "REMOVE_TASK",
  payload: task,
});
