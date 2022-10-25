import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { fakePost } from "../../test-utils/mocks/posts/postsMocks";
import PostCard from "./PostCard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

let mockRemovePost = { deletePost: jest.fn() };
jest.mock("../../hooks/usePosts/usePosts", () => () => mockRemovePost);

describe("Given a Post Card component", () => {
  describe("When it's intantiated", () => {
    test("Then it should show a 'Leanne Graham' as a name, a title of post and a content", () => {
      render(
        <Provider store={store}>
          <PostCard post={fakePost} />
        </Provider>
      );

      const post = [
        screen.getByText(fakePost.userName as string),
        screen.getByRole("heading", {
          name: fakePost.title,
        }),
        screen.getByText(fakePost.body),
        screen.getByTestId("icon-trash"),
      ];

      post.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe("When it's instantiated and click on icon trash", () => {
    test("Then it should call the remove function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostCard post={fakePost} />
          </BrowserRouter>
        </Provider>
      );

      const iconTrash = screen.getByTestId("icon-trash");

      await userEvent.click(iconTrash);

      await expect(mockRemovePost.deletePost).toHaveBeenCalled();
    });
  });
});
