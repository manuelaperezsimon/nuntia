import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loadingReducer } from "./features/slices/loading/loadingSlice";
import { postsReducer } from "./features/slices/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    loading: loadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
