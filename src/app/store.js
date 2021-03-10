import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import entriesReducer from "../features/smithImages/entriesSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    entries: entriesReducer,
    searchParams: searchReducer,
  },
});
