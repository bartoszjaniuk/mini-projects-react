import React from "react";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";

const List = ({ listItems, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {listItems.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="grocery__item">
            <p className="grocery__item--title">{title}</p>
            <div className="grocery__button-group">
              <button
                type="button"
                className="grocery__button-group--edit"
                onClick={() => editItem(id)}
              >
                <RiEditBoxLine className="size" />
              </button>
              <button
                type="button"
                className="grocery__button-group--delete"
                onClick={() => removeItem(id)}
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

export default List;
