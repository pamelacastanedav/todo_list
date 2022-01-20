import "./App.css";
import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  //input boxes are strings// start value of state is ""
  const [newTodo, setNewTodo] = useState("");

  //this will me the list of "All Todos"// set as empty arry in order to map if needed
  const [allTodo, setAlltodo] = useState([]);

  //this is the function to handle submit a new todo list
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setAlltodo([...allTodo, todoItem]);
    //this is to clear input and than add a value to input to connect to connect/clear
    setNewTodo("");
  };

  //delete function
  const handleTodoDelete = (delIdx) => {
    const filterTodo = allTodo.filter((todo, idx) => {
      return idx !== delIdx;
    });
    //creates new arry
    setAlltodo(filterTodo);
  };

  //this will hand the checkmark in order to mark complete in react// create new arry with changed item

  const handleComplete = (idx) => {
    const updatedTodos = allTodo.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setAlltodo(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        {/* connect newTodo to event/stores value of input */}
        <input
          onChange={(event) => setNewTodo(event.target.value)}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add!</button>
        </div>
      </form>

      {allTodo.map((todo, idx) => {
        return (
          <Todo
            idx={idx}
            key={idx}
            todo={todo}
            handleComplete={handleComplete}
            handleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
