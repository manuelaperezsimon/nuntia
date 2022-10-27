import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../../../interfaces/userInterface";

const userInitialState: User = {
  userName: "",
  password: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    login: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
    }),
  },
});

export const { reducer: usersReducer } = usersSlice;

export const { login: loginActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
