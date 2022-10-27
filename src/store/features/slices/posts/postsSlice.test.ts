import { Posts } from "../../../../interfaces/postsInterface";
import {
  fakeListPostsWithUserName,
  fakePost,
} from "../../../../test-utils/mocks/posts/postsMocks";
import postsSlice, {
  deletePostActionCreator,
  editPostActionCreator,
  loadAllPostsActionCreator,
  postsReducer,
} from "./postsSlice";

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

  describe("When invoked with a post id as a payload", () => {
    test("Then it should return an action with a type 'posts/deletePost' and id as payload", () => {
      const actionType = "posts/deletePost";
      const expectedAction = {
        type: actionType,
        payload: fakePost.id,
      };

      const action = deletePostActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
  });

  describe("When called with the delete action", () => {
    test("Then it should remove the post passed in the action from the state", () => {
      const initialStateTest: Posts = [fakePost];
      const expectedState: Posts = [];

      const actionDelete = deletePostActionCreator(fakePost.id);

      const result = postsReducer(initialStateTest, actionDelete);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe("When called with the edit function with a posts that exist in the state", () => {
    test("Then it should return an updated state", () => {
      const postToEdit = [fakePost];

      const postEdited = {
        userId: 1,
        id: 2,
        title: "Drive a Ferrari",
        body: "The best experience in the world",
        userName: "Leanne Graham",
      };

      const actionFake = editPostActionCreator(postEdited);

      const result = postsReducer(postToEdit, actionFake);

      expect(result).toStrictEqual([postEdited]);
    });
  });
});
