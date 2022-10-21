import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../../../../interfaces/postsInterface";

const postsInitialState: Posts = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    loadAllPosts: (previousPosts, action: PayloadAction<Posts>) =>
      action.payload,
  },
});

export const { reducer: postsReducer } = postsSlice;

export const { loadAllPosts: loadAllPostsActionCreator } = postsSlice.actions;

export default postsSlice.reducer;
