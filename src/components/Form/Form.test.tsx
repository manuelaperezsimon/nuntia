import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { fakePost } from "../../test-utils/mocks/posts/postsMocks";
import Form from "./Form";

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
});
