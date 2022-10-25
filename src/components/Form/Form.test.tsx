import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a title, close icon, two inputs and a button", () => {
      render(
        <Provider store={store}>
          <Form />
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
