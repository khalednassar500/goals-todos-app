import List from "./List";

const Todos = ({ items = [], name }) => {
  return (
    <div className="todos-con">
      <h2>{name}</h2>
      <div className="todos">
        <br></br>
        {!items.length > 0 && (
          <p className="default-text">add some items to be rendered here</p>
        )}
        {items.length > 0 &&
          items.map((i) => <List item={i} key={i.id} name={name} />)}
      </div>
    </div>
  );
};

export default Todos;
