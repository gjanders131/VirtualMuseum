import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEntries = createAsyncThunk(
  "entries/getEntries",
  async (url) => {
    return fetch(url).then((res) => res.json());
  }
);

const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    entries: [],
    loading: false,
  },
  extraReducers: {
    [getEntries.pending]: (state, action) => {
      state.loading = true;
    },
    [getEntries.fulfilled]: (state, { payload }) => {
      state.entries = payload;
      state.loading = false;
    },
    [getEntries.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.message);
    },
  },
});

export const { testEntries } = entriesSlice.actions;

export const selectEntries = (state) => state.entries;

export default entriesSlice.reducer;
