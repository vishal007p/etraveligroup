import React from "react";

function Itemlist({ res }) {
  return (
    <div>
      <p>{res}</p>
      <button>Edit</button> <button>Delete</button>
    </div>
  );
}

export default Itemlist;
