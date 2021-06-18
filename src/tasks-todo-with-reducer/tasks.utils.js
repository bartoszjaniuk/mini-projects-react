export const setAlert = (show = false, message = "", type = "") => {
  return {
    show: show,
    type: type,
    message: message,
  };
};

export const removeTaskFromList = (currentTaskList, taskToRemove) => {
  return currentTaskList.filter((task) => task.id !== taskToRemove.id);
};

export const editTaskFromList = (currentTaskList, taskToEdit) => {
  const editedTask = {
    title: taskToEdit.title,
  };
  return [...currentTaskList, taskToEdit];
};
