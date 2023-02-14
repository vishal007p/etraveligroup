import Filter from "../Components/Filter";
import List from "../Components/List/List";
import Search from "../Components/Serach";
import SelectedItem from "../Components/List/SelectedItem";
import "../style.css";
import { useEffect, useState } from "react";
import * as apicall from "../api";
import { AuthContext } from "./Mycontext";

const Layout = () => {
  const [movies, setMovies] = useState(null);
  const [filterBy, setfilterBy] = useState("select");
  const [selectedItem, setselectedItem] = useState(null);
  const [filterItem, setFilterItem] = useState(null);
  const fetchData = async () => {
    const movilist = await apicall.getData();
    if (movilist && movilist.results) {
      setMovies(movilist.results);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        movies,
        setMovies,
        selectedItem,
        setselectedItem,
        filterItem,
        setFilterItem,
        fetchData,
        filterBy,
        setfilterBy,
      }}
    >
      <div className="layout">
        <div className="head">
          <Filter />
          <Search />
        </div>

        <div className="listMovie">
          <List />
          <SelectedItem />
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default Layout;
