import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a button with 'Edit' as text", () => {
      render(
        <Provider store={store}>
          <Button
            text="Edit"
            classNameOfType=""
            type="button"
            isDisabled={false}
          />
        </Provider>
      );

      const expectedText = "Edit";

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
