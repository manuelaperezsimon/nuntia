import { createSlice } from "@reduxjs/toolkit";

const loadingInitialState: boolean = false;

const loadingSlice = createSlice({
  name: "loading",
  initialState: loadingInitialState,
  reducers: {
    isLoading: (previousState) => !previousState,
  },
});

export const { reducer: loadingReducer } = loadingSlice;

export const { isLoading: isLoadingActionCreator } = loadingSlice.actions;

export default loadingSlice.reducer;
