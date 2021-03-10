import { createSlice } from "@reduxjs/toolkit";
import { key, base_url } from "../../api";

const searchSlice = createSlice({
  name: "searchParams",
  initialState: {
    query: "",
    cat: "art_design",
    rows: 10,
    start: 0,
    page: 1,
    searchURL: "",
  },
  reducers: {
    addQuery: (state, action) => {
      state.query = action.payload;
    },
    changeCat: (state, action) => {
      state.cat = action.payload;
    },
    changeRows: (state, action) => {
      state.rows = action.payload;
    },
    incrementStart: (state) => {
      state.start += state.rows;
    },
    decrementStart: (state) => {
      if (state.start >= state.rows) {
        state.start -= state.rows;
      } else {
        state.start = 0;
      }
    },
    page: (state) => {
      state.page = state.start / state.rows + 1;
    },
    searchURL: (state) => {
      state.searchURL = `${base_url}category/${state.cat}/search?q=${state.query}&start=${state.start}&rows=${state.rows}&${key}`;
    },
  },
});

export const {
  addQuery,
  changeCat,
  changeRows,
  incrementStart,
  decrementStart,
  page,
  searchURL,
} = searchSlice.actions;

export const selectSearchParams = (state) => state.searchParams;

export default searchSlice.reducer;
