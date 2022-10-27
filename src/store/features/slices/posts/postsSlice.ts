import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, Posts } from "../../../../interfaces/postsInterface";

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

    editPost: (previousPost, action: PayloadAction<Post>) => {
      return previousPost.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const { reducer: postsReducer } = postsSlice;

export const {
  loadAllPosts: loadAllPostsActionCreator,
  deletePost: deletePostActionCreator,
  editPost: editPostActionCreator,
} = postsSlice.actions;

export default postsSlice.reducer;
