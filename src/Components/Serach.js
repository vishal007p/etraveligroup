// import Layout from "./Container/Layout";

import { useContext } from "react";
import { AuthContext } from "../Container/Mycontext";

const Search = () => {
  const {
    movies,
    setFilterItem,
  } = useContext(AuthContext);

  const handleSearch = (searchValue) => {
    var filteredData = movies.filter(function (obj) {
      if (obj["title"].includes(searchValue)) {
        return obj;
      }
    });
    setFilterItem(filteredData)
  };
  return (
      <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Type to search.............." />
  );
};

export default Search;
