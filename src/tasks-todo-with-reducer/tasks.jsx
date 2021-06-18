import React from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

const Tasks = ({ listItems, editTask, removeTask }) => {
  return (
    <div className="tasks-list">
      {listItems.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="tasks__item">
            <p className="tasks__item--title">{title}</p>
            <div className="tasks__button-group">
              <button
                type="button"
                className="tasks__button-group--edit"
                onClick={() => editTask(item)}
              >
                <RiEditBoxLine className="size" />
              </button>
              <button
                type="button"
                className="tasks__button-group--delete"
                onClick={() => removeTask(item)}
              >
                <RiDeleteBin6Line className="size" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;

// removeItem={removeItem} editItem={editItem}
