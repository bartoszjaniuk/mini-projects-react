import React, { useEffect, useState } from "react";
import Alert from "./alert";
import List from "./list";
import { AiOutlineClear } from "react-icons/ai";

const getLocalStorageList = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  return [];
};

const GroceryList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorageList());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItemToList = (itemToAdd) => {
    if (!itemToAdd) {
      setAlert({
        show: true,
        message: "please enter value 💣",
        type: "danger",
      });

      showAlert(true, "danger", "please enter value 💣");
    } else {
      showAlert(true, "success", "item added to list 🕵️‍♀️");
      const newItem = {
        id: new Date().getTime().toString(),
        title: itemToAdd,
      };
      setList([...list, newItem]);
      setName("");
    }

    if (itemToAdd && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };

          return item;
        })
      );
    }
    setName("");
    setEditId("");
    setIsEditing(false);
    showAlert(true, "success", "value changed");
  };

  const clearList = () => {
    showAlert(true, "success", "list has been cleared 🌪");
    setList([]);
  };

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show: show, type: type, message: message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemToList(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const removeItem = (itemToRemoveId) => {
    setList(list.filter((item) => item.id !== itemToRemoveId));
  };

  const editItem = (id) => {
    const item = list.find((itemToFind) => itemToFind.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(item.title);
  };
  return (
    <div className="grocery-list-section">
      <h3 className="grocery__title">Grocery List </h3>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <form onSubmit={handleSubmit} className="grocery__form">
        <input
          type="text"
          value={name}
          placeholder="e.g milk"
          className="grocery__input"
          onChange={handleChange}
        />
        <button type="submit" className="grocery__submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </form>
      {list.length > 0 && (
        <div className="grocery__container">
          <List listItems={list} removeItem={removeItem} editItem={editItem} />
          <button className="grocery__clear-btn" onClick={clearList}>
            <AiOutlineClear />
          </button>
        </div>
      )}
    </div>
  );
};

export default GroceryList;
