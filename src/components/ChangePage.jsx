import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementStart,
  incrementStart,
  page,
  searchURL,
  selectSearchParams,
} from "../features/search/searchSlice";
import { getEntries } from "../features/smithImages/entriesSlice";
import styled from "styled-components";

const ChangePage = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);

  useEffect(() => {
    const start = searchParams.start;
    dispatch(getEntries(searchParams.searchURL));
  }, [searchParams.start]);

  return (
    <ChangePageStyled>
      <button
        onClick={() => {
          dispatch(decrementStart());
          dispatch(page());
          dispatch(searchURL());
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div>{searchParams.page}</div>
      <button
        onClick={async () => {
          dispatch(incrementStart());
          dispatch(searchURL());
          dispatch(page());
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </ChangePageStyled>
  );
};

const ChangePageStyled = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  button {
    pointer-events: all;
    background: none;
    border: none;
  }
`;

export default ChangePage;
