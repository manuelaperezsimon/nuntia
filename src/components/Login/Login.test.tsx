import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import Login from "./Login";

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
});
