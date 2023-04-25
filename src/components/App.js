import "../App.css";
import AddNew from "./AddNew";
import ItemsContainer from "./ItemsContainer";
import { connect, useDispatch } from "react-redux";
import { toggleView } from "../actions/view";

function App({ todos, goals, views }) {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 id="logo">
        T
        <span id="o_d_o">
          O
          <span id="d_o">
            <span id="d">D</span>O
          </span>
        </span>
      </h1>
      <ItemsContainer items={todos} name="T O D O S" />
      <ItemsContainer items={goals} name="G O A L S" />
      {views && views.value && <AddNew data={views} />}
      <div className={`create-new ${views.value ? "create-new-active" : ""}`}>
        <button onClick={() => dispatch(toggleView())}>＋</button>
      </div>
    </div>
  );
}

export default connect((state) => ({
  todos: state.todos,
  goals: state.goals,
  views: state.views,
}))(App);
