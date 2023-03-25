// import Layout from "./Container/Layout";

import { useContext } from "react";
import { AuthContext } from "../../Container/Mycontext";

const SelectedItem = () => {
  const { selectedItem } = useContext(AuthContext);
  return (
    <div className="selectedItem">
      {selectedItem === null && (
        <div className="noitem">No movies selected</div>
      )}
      {selectedItem && (
        <div className="haveItem">
          <h1>{selectedItem && `EPISODE ${selectedItem.episode_id}`}</h1>
          <p>{selectedItem && selectedItem.opening_crawl}</p>
          <span>Directed By : {selectedItem.director}</span>
        </div>
      )}
    </div>
  );
};

export default SelectedItem;
