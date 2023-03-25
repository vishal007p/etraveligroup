import React, { useContext } from "react";
import Itemlist from "./Itemlist";
import TodoContext from "./Todocontext";
import Xyz from "./Xyz";
function List() {
  const { data } = useContext(TodoContext);
  return (
    <div>
      {/* {data && data.map((res, index) => <Itemlist key={index} res={res} />)} */}
      <Xyz />
    </div>
  );
}

export default List;
