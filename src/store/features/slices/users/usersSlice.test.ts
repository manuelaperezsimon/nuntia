import User from "../../../../interfaces/userInterface";
import fakeUser from "../../../../test-utils/mocks/users/users";
import usersSlice, {
  loginActionCreator,
  logoutActionCreator,
  usersReducer,
} from "./usersSlice";

describe("Given a user slice", () => {
  const initialStateUser: User = {
    password: "",
    userName: "",
  };
  describe("When it's invoked with an initial state as previous user and a login user action creator with a fakeUser", () => {
    test("Then it should return the fakeUser", () => {
      const user = usersSlice(initialStateUser, loginActionCreator(fakeUser));

      expect(user).toStrictEqual(fakeUser);
    });
  });

  describe("When invoked the logoutActionCreator", () => {
    test("Then it should return a initial state", () => {
      const logout = usersReducer(fakeUser, logoutActionCreator());

      expect(logout).toStrictEqual(initialStateUser);
    });
  });
});
