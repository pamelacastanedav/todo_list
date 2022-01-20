const Todo = (props) => {
  const checkboxHandeler = (idx) => {
    props.handleComplete(idx);
  };
  return (
    <div>
      <input
        onChange={(event) => {
          checkboxHandeler(props.idx);
        }}
        checked={props.todo.complete}
        type="checkbox"
      />
      <span>{props.todo.text}</span>
      <button
        onClick={(event) => {
          props.handleTodoDelete(props.idx);
        }}
      >
        Delete!
      </button>
    </div>
  );
};

export default Todo;
