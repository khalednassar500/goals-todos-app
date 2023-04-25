import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../actions/todos";
import { addGoal, updateGoal, removeGoal } from "../actions/goals";

const AddNew = ({ data }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [radioType, setRadioType] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  let open = data.value;

  useEffect(() => {
    if (data.id) {
      setTitle(data.title);
      setContent(data.content);
      setRadioType(data.type);
    }
  }, [data.id, data.content, data.title, data.type]);

  const generateId = () => {
    return Math.random().toString(36).substring(2);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (radioType === "todo" && !data.id && title) {
      let newObj = {
        id: generateId(),
        title,
        content,
        complete: false,
      };
      dispatch(addTodo(newObj));
    } else if (radioType === "goal" && !data.id && title) {
      let newObj = {
        id: generateId(),
        title,
        content,
        complete: false,
      };
      dispatch(addGoal(newObj));
    } else if (!title) {
      setError(true);
    } else if (radioType === "todo" && data.id && data.type === "todo") {
      let newObj = {
        id: data.id,
        title,
        content,
        complete: data.complete,
      };
      dispatch(updateTodo(newObj));
    } else if (radioType === "goal" && data.id && data.type === "goal") {
      let newObj = {
        id: data.id,
        title,
        content,
        complete: data.complete,
      };
      dispatch(updateGoal(newObj));
    } else if (radioType === "goal" && data.id && data.type === "todo") {
      let newObj = {
        id: generateId(),
        title,
        content,
        complete: data.complete,
      };
      dispatch(addGoal(newObj));
      dispatch(removeTodo(data.id));
    } else if (radioType === "todo" && data.id && data.type === "goal") {
      let newObj = {
        id: generateId(),
        title,
        content,
        complete: data.complete,
      };
      dispatch(addTodo(newObj));
      dispatch(removeGoal(data.id));
    }
  };

  return (
    <div className={`create-con ${open ? "create-con-active" : ""}`}>
      {data.id && (
        <h2>V I E W &nbsp;A D D &nbsp; U P D A T E &nbsp; I T E M</h2>
      )}
      {!data.id && <h2>A D D &nbsp; N E W &nbsp; I T E M</h2>}

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          style={error ? { border: "2px solid red" } : {}}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(false);
          }}
        />
        <textarea
          placeholder="✎ . . ."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label htmlFor="todo" className="container">
          <input
            type="radio"
            id="todo"
            name="type"
            value="todo"
            checked={radioType === "todo" ? true : false}
            onChange={(e) => setRadioType("todo")}
          />
          Add as todo
          <span className="checkmark"></span>
        </label>
        <label htmlFor="goal" className="container">
          <input
            type="radio"
            id="goal"
            name="type"
            value="goal"
            checked={radioType === "goal" ? true : false}
            onChange={(e) => setRadioType("goal")}
          />
          Add as goal
          <span className="checkmark"></span>
        </label>
        {data.id && <button>UPDATE</button>}
        {!data.id && <button>ADD</button>}
      </form>
    </div>
  );
};

export default AddNew;
