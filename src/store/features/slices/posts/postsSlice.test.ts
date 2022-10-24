import { Posts } from "../../../../interfaces/postsInterface";
import { fakeListPostsWithUserName } from "../../../../test-utils/mocks/posts/postsMocks";
import postsSlice, { loadAllPostsActionCreator } from "./postsSlice";

describe("Given a posts slice", () => {
  describe("When invoked with an initial state as previous posts and a loadAllPost with a fake list of posts", () => {
    test("Then it should return the list with two posts", () => {
      const initialState: Posts = [];

      const posts = postsSlice(
        initialState,
        loadAllPostsActionCreator(fakeListPostsWithUserName)
      );

      expect(posts).toStrictEqual(fakeListPostsWithUserName);
    });
  });
});
