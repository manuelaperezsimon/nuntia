import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Given a Login component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a title, two inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      );

      const title = "Welcome back!";
      const labelUserName = "User Name:";
      const labelPassword = "Password:";
      const buttonText = "Sign In";

      const elementsLogin = [
        screen.getByRole("heading", { name: title }),
        screen.getByLabelText(labelUserName),
        screen.getByLabelText(labelPassword),
        screen.getByRole("button", { name: buttonText }),
      ];

      elementsLogin.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe("When the user type on the inputs", () => {
    test("Then the inputs values have to be that user type", async () => {
      const usernameTyped = "Hilario";
      const passwordTyped = "Bye";

      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      const placeholderInputUsername = "Enter your user name :)";
      const placeholderInputPassword = "Here your password";

      const inputOfUsername = screen.getByPlaceholderText(
        placeholderInputUsername
      ) as HTMLInputElement;
      const inputOfPassword = screen.getByPlaceholderText(
        placeholderInputPassword
      ) as HTMLInputElement;

      await userEvent.type(inputOfUsername, usernameTyped);
      await userEvent.type(inputOfPassword, passwordTyped);

      expect(inputOfUsername).toHaveValue(usernameTyped);
      expect(inputOfPassword).toHaveValue(passwordTyped);
    });
  });
});
