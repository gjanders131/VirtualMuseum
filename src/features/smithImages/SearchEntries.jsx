import { useDispatch, useSelector } from "react-redux";
import { getEntries } from "./entriesSlice";
import {
  addQuery,
  changeCat,
  changeRows,
  searchURL,
  selectSearchParams,
} from "../search/searchSlice";

const SearchEntries = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);

  const searchHandler = () => {
    dispatch(getEntries(searchParams.searchURL));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Topic"
        onChange={(e) => {
          dispatch(addQuery(e.target.value));
          dispatch(searchURL());
        }}
        /* onChange={(e) => setSearch({ ...search, query: e.target.value })} */
      />
      <select
        value={searchParams.cat}
        onChange={(e) => {
          dispatch(changeCat(e.target.value));
          dispatch(searchURL());
        }}
      >
        <option value="art_design">Art and Design</option>
        <option value="history_culture">History and Culture</option>
        <option value="science_technology">Science and Technology</option>
      </select>
      <input
        type="number"
        name="rows"
        value={searchParams.rows}
        onChange={(e) => {
          dispatch(changeRows(e.target.value));
          dispatch(searchURL());
        }}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchEntries;
