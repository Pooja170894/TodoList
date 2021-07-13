import React, { useState } from "react";
import "./Todo.css";
import todo from "../Images/todo.png";

const Todo = () => {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!listItem) {
      alert("You can not add empty data");
    } 
    else if(listItem && !toggleAdd){
        setList(
            list.map((elem)=>{
                if(elem.id ===isEditItem){
                    return { ...elem, name: listItem}
                }
                return elem;
            })
            
        )
        setToggleAdd(true);
        setListItem('');
        setIsEditItem(null);
    }
    else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: listItem,
      };
      setList([...list, allInputData]);
      setListItem("");
    }
  };
  const deleteItem = (index) => {
    const updateItem = list.filter((curElem) => {
      return index !== curElem.id;
    });
    setList(updateItem);
  };
  const removeAll = () => {
    setList([]);
  };
  const EditItem = (id) => {
    let newEditItem = list.find((elem) => {
      return elem.id === id;
    });
    setToggleAdd(false);
    setListItem(newEditItem.name);
    setIsEditItem(id);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="TodoList logo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add items..."
              value={listItem}
              onChange={(event) => setListItem(event.target.value)}
            />
            {toggleAdd ? (
              <i
                className="fa fa-plus add-btn"
                title="Add item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-pencil-square-o"
                title="Update item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-pencil-square-o add-btn"
                      title="Edit Item"
                      onClick={() => EditItem(elem.id)}
                    ></i>
                    <i
                      className="fa fa-trash-o add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
