import { Posts } from "../../../../interfaces/postsInterface";
import fakeListPosts from "../../../../test-utils/mocks/postsMocks";
import postsSlice, { loadAllPostsActionCreator } from "./postsSlice";

describe("Given a posts slice", () => {
  describe("When invoked with an initial state as previous posts and a loadAllPost with a fake list of posts", () => {
    test("Then it should return the list with two posts", () => {
      const initialState: Posts = [];

      const posts = postsSlice(
        initialState,
        loadAllPostsActionCreator(fakeListPosts)
      );

      expect(posts).toStrictEqual(fakeListPosts);
    });
  });
});
