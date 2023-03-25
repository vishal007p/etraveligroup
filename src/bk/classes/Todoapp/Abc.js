import React, { useContext } from "react";
import Test from "./Test";
import Themecontext from "./Themecontext";

function Abc() {
  const { themeColor, setthemeColor } = useContext(Themecontext);

  return (
    <div>
      Abc component theme color {themeColor}
      <Test />
    </div>
  );
}

export default Abc;
