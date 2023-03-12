import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import TodoContext from "./Todocontext";
import Themecontext from "./Themecontext";

function Index() {
  const [data, setData] = useState([]);
  const [themeColor, setthemeColor] = useState("light");
  return (
    <div>
      <TodoContext.Provider
        value={{ data, setData, themeColor, setthemeColor }}
      >
        <Themecontext.Provider value={{ themeColor, setthemeColor }}>
          <Input />
          <List />
        </Themecontext.Provider>
      </TodoContext.Provider>
    </div>
  );
}

export default Index;

// callback hell
