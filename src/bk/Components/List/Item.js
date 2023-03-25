import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../Container/Mycontext";

const Item = ({ title, year, id }) => {
  const { movies, setselectedItem } = useContext(AuthContext);
  const handleSelect = () => {
    const res = movies.find((dd) => dd.episode_id === id);
    setselectedItem(res);
  };
  return (
      
          <li data-testid={`render-item-${id}`} onClick={() => handleSelect(id)}>{`EPISODE ${id} `} {title}<span className="year">{moment(year).format("YYYY-MM-DD ")}</span></li>
  );
};
export default Item;
