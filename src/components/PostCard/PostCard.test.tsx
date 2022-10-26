import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { fakePost } from "../../test-utils/mocks/posts/postsMocks";
import PostCard from "./PostCard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

let mockRemovePost = { deletePost: jest.fn() };
jest.mock("../../hooks/usePosts/usePosts", () => () => mockRemovePost);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Post Card component", () => {
  describe("When it's intantiated", () => {
    test("Then it should show a 'Leanne Graham' as a name, a title of post, a content and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostCard post={fakePost} />
          </BrowserRouter>
        </Provider>
      );

      const buttonText = "Edit";

      const post = [
        screen.getByText(fakePost.userName as string),
        screen.getByRole("heading", {
          name: fakePost.title,
        }),
        screen.getByText(fakePost.body),
        screen.getByTestId("icon-trash"),
        screen.getByRole("button", { name: buttonText }),
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

  describe("When the user click on Edit button", () => {
    test("Then it should call the goToFormEdit function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostCard post={fakePost} />
          </BrowserRouter>
        </Provider>
      );

      const buttonText = "Edit";

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
