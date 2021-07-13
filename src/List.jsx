import React, { useState } from "react";
import { ListItem } from "./ListItem";
import "./List.css";

const List = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const setItem = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    // console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="center_div">
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="add items"
            value={inputList}
            onChange={setItem}
          />
          <button onClick={addItem}> + </button>

          <ol>
            {items.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  id={index}
                  text={item}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default List;
