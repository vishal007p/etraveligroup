// import Layout from "./Container/Layout";

import { useContext } from "react";
import { AuthContext } from "../Container/Mycontext";

const Filter = () => {
  const {
    movies,
    setMovies,
    // setfilterBy,
  } = useContext(AuthContext);
  const handleChange = (e) => {
    let name = e.target.value;
    var secondRun = movies.sort(function (a, b) {
      return name === "created"
        ? Date.parse(b.created) - Date.parse(a.created)
        : a[name] - b[name];
    });
    let items = [...secondRun];
    setMovies(items);
  };
  return (
    <div className="filterBox">
      <select onChange={(e) => handleChange(e)}>
        <option>Sort By</option>
        <option value="episode_id">Epiode</option>
        <option value="created">Year</option>
      </select>
    </div>
  );
};

export default Filter;
