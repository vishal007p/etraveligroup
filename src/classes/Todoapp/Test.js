import React, { useContext } from "react";
import Itemlist from "./Itemlist";
import TodoContext from "./Todocontext";
import Themecontext from "./Themecontext";

function Test() {
  const { data } = useContext(TodoContext);
  const { themeColor, setthemeColor } = useContext(Themecontext);
  return (
    <div>
      this is Test component
      <h1>Color : {themeColor}</h1>
      <button onClick={() => setthemeColor("blue")}>Change Theme Color</button>
      {data &&
        data.map((res, index) => (
          <div style={{ display: "flex" }}>
            <Itemlist key={index} res={res} />{" "}
          </div>
        ))}
    </div>
  );
}

export default Test;
