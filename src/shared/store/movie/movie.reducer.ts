import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MovieFilter {
  title: string;
  page: number;
}

const initialState: MovieFilter = {
  title: "",
  page: 1,
};

export const movieFilterSlice = createSlice({
  name: "movieFilters",
  initialState,
  reducers: {
    setMovieFilters: (_, action: PayloadAction<MovieFilter>) => action.payload,
  },
  selectors: {
    selectMovieFilters: (state) => state,
  },
});

// Action creators are generated for each case reducer function
export const { setMovieFilters } = movieFilterSlice.actions;
export const { selectMovieFilters } = movieFilterSlice.selectors;

export default movieFilterSlice.reducer;
