import React, { useContext, useState } from "react";
import TodoContext from "./Todocontext";

function Input() {
  const { data, setData } = useContext(TodoContext);
  const [name, setName] = useState(null);
  const handleClick = () => {
    setData([...data, name]);
    setName(null);
  };
  return (
    <div>
      <input
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name || " "}
      />{" "}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Input;
