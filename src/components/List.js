import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../actions/todos";
import { toggleGoal, removeGoal } from "../actions/goals";
import { viewToUpdate } from "../actions/view";

const List = ({ item, name }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (name === "T O D O S") {
      dispatch(toggleTodo(item.id));
    } else if (name === "G O A L S") {
      dispatch(toggleGoal(item.id));
    }
  };

  const handleRemove = () => {
    if (name === "T O D O S") {
      dispatch(removeTodo(item.id));
    } else if (name === "G O A L S") {
      dispatch(removeGoal(item.id));
    }
  };

  const handleView = () => {
    if (name === "T O D O S") {
      let o = Object.assign({}, item, { type: "todo" });
      dispatch(viewToUpdate(o));
    } else if (name === "G O A L S") {
      let o = Object.assign({}, item, { type: "goal" });
      dispatch(viewToUpdate(o));
    }
  };

  return (
    <div className={`item ${item.complete ? "complete" : ""}`}>
      <div className="item-content">
        <p>{item.title}</p>
      </div>
      <div className="item-operations">
        <div className="img view" onClick={handleView}></div>
        <div className="img finished" onClick={handleToggle}>
          ✔
        </div>
        <div className="img delete" onClick={handleRemove}></div>
      </div>
    </div>
  );
};

export default List;
