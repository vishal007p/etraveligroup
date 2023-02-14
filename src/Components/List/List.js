import { useContext } from "react";
import { AuthContext } from "../../Container/Mycontext";
import Item from "./Item";
const List = () => {
  const { movies, filterItem } = useContext(AuthContext);
  if (filterItem) {
    return (
      <ul className="item">
        {filterItem &&
          filterItem.map((res, index) => (
            <Item
              key={index}
              title={res.title}
              id={res.episode_id}
              year={res.release_date}
            />
          ))}
      </ul>
    );
  }
  return (
    <ul className="item">
      {movies &&
        movies.map((res, index) => (
          <Item
            key={index}
            title={res.title}
            id={res.episode_id}
            year={res.release_date}
          />
        ))}
    </ul>
  );
};

export default List;
