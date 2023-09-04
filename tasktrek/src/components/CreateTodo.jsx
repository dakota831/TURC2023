import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
