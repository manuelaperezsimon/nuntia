import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { fakePost } from "../../test-utils/mocks/posts/postsMocks";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a title, close icon, two inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Form post={fakePost} />
          </BrowserRouter>
        </Provider>
      );

      const expectedTitle = "Edit the post!";
      const iconCloseId = "icon-close";
      const placeholderInputTitle = "THE title for your post:)";
      const placeholderInputBody = "Write your post!";
      const buttonText = "Save";

      const form = [
        screen.getByRole("heading", { name: expectedTitle }),
        screen.getByTestId(iconCloseId),
        screen.getByPlaceholderText(placeholderInputTitle) as HTMLInputElement,
        screen.getByPlaceholderText(placeholderInputBody) as HTMLInputElement,
        screen.getByRole("button", { name: buttonText }),
      ];

      form.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
  describe("When click on close icon", () => {
    test("Then it should call the navigateToPostsList function", async () => {
      render(
        <Provider store={store}>
          <Form post={fakePost} />
        </Provider>
      );

      const iconClose = screen.getByTestId("icon-close");

      await userEvent.click(iconClose);

      expect(iconClose).toBeInTheDocument();

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the user type in the inputs", () => {
    test("Then the inputs values have to be that user type", async () => {
      const titleInputTyped = "Hi";
      const bodyInputTyped = "Bye";

      render(
        <Provider store={store}>
          <Form post={fakePost} />
        </Provider>
      );

      const placeholderInputTitle = "THE title for your post:)";
      const placeholderInputBody = "Write your post!";

      const inputOfTitle = screen.getByPlaceholderText(
        placeholderInputTitle
      ) as HTMLInputElement;
      const inputOfBody = screen.getByPlaceholderText(
        placeholderInputBody
      ) as HTMLInputElement;

      await userEvent.type(inputOfTitle, titleInputTyped);
      await userEvent.type(inputOfBody, bodyInputTyped);

      expect(inputOfTitle).toHaveValue(fakePost.title + titleInputTyped);
      expect(inputOfBody).toHaveValue(fakePost.body + bodyInputTyped);
    });
  });
});
