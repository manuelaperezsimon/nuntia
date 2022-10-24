import { render, screen } from "@testing-library/react";
import { Posts } from "../interfaces/postsInterface";
import { RootState } from "../store/store";
import {
  fakeListPosts,
  fakeListPostsWithUserName,
} from "../test-utils/mocks/posts/postsMocks";
import Wrapper from "../utils/Wrapper";
import PostsListPage from "./PostsListPage";

const mockUseAppSelector = jest.fn();

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppSelector: (callback: (state: RootState) => Posts) => {
    callback({ posts: [] });
    return mockUseAppSelector();
  },
}));

describe("Given a PostsListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a PostList component", async () => {
      mockUseAppSelector.mockReturnValue(fakeListPostsWithUserName);

      render(<PostsListPage />, { wrapper: Wrapper });

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
