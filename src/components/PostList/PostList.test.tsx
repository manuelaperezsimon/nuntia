import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Posts } from "../../interfaces/postsInterface";
import { RootState, store } from "../../store/store";
import {
  fakeListPosts,
  fakeListPostsWithUserName,
} from "../../test-utils/mocks/posts/postsMocks";
import PostList from "./PostList";

const mockUseAppSelector = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: (callback: (state: RootState) => Posts) => {
    callback({ posts: [] });
    return mockUseAppSelector();
  },
}));

describe("Given a Posts List component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a list of two posts", async () => {
      mockUseAppSelector.mockReturnValue(fakeListPostsWithUserName);

      render(
        <Provider store={store}>
          <PostList />
        </Provider>
      );

      const titlesOfPosts = [
        screen.getByRole("heading", {
          name: fakeListPosts[0].title,
        }),
        screen.getByRole("heading", {
          name: fakeListPosts[1].title,
        }),
      ];

      titlesOfPosts.forEach((title) => {
        expect(title).toBeInTheDocument();
      });
    });
  });
});
