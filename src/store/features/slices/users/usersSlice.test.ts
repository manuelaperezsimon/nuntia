import User from "../../../../interfaces/userInterface";
import fakeUser from "../../../../test-utils/mocks/users/users";
import usersSlice, { loginActionCreator } from "./usersSlice";

describe("Given a user slice", () => {
  describe("When it's invoked with an initial state as previous user and a login user action creator with a fakeUser", () => {
    test("Then it should return the fakeUser", () => {
      const initialStateUser: User = {
        password: "",
        userName: "",
      };

      const user = usersSlice(initialStateUser, loginActionCreator(fakeUser));

      expect(user).toStrictEqual(fakeUser);
    });
  });
});
