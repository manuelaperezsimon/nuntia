import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../../../../interfaces/postsInterface";

const postsInitialState: Posts = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    loadAllPosts: (previousPosts, action: PayloadAction<Posts>) =>
      action.payload,
    deletePost: (previousPosts, action: PayloadAction<number>) => {
      return previousPosts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { reducer: postsReducer } = postsSlice;

export const {
  loadAllPosts: loadAllPostsActionCreator,
  deletePost: deletePostActionCreator,
} = postsSlice.actions;

export default postsSlice.reducer;
