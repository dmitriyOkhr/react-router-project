import { useState } from "react";
import { useDispatch } from "react-redux";
import addItem from "../actions/addItem";

const MainForm = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(true);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const onSaveItem = (input, desc) => {
    const item = { title: input, description: desc };
    dispatch(addItem(item));
    setTitleInput("");
    setDescInput("");
  };

  const onCansel = () => {
    setTitleInput("");
    setDescInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };
  return (
    <div>
      {isEdit ? (
        <button onClick={() => setIsEdit(false)}>Add</button>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            value={titleInput}
            type="text"
            placeholder="title?"
            onChange={(event) => setTitleInput(event.target.value)}
          ></input>
          <textarea
            value={descInput}
            placeholder="description?"
            onChange={(event) => setDescInput(event.target.value)}
          ></textarea>
          <button onClick={onCansel}>cansel</button>
          <button onClick={() => onSaveItem(titleInput, descInput)}>
            save
          </button>
        </form>
      )}
    </div>
  );
};

export default MainForm;
