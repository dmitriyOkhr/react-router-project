import { useDispatch } from "react-redux";
import { useState } from "react";
import deleteItem from "../actions/deleteItem";
import changeItem from "../actions/changeItem";

const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState(item.title);
  const [inputDesc, setInputDesc] = useState(item.description);

  const onSave = (title, desc) => {
    const obj = { title: title, description: desc, id: item.id };
    dispatch(changeItem(obj));
  };

  const onCansel = () => {
    setInputTitle(item.title);
    setInputDesc(item.description);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={onSubmit}>
          <input
            value={inputTitle}
            type="text"
            onChange={(e) => setInputTitle(e.target.value)}
          ></input>
          <textarea
            value={inputDesc}
            onChange={(e) => setInputDesc(e.target.value)}
          ></textarea>
          <button onClick={onCansel}>cansel</button>
          <button onClick={() => onSave(inputTitle, inputDesc)}>save</button>
        </form>
      ) : (
        <div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <button onClick={() => setIsEdit(true)}>change</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
