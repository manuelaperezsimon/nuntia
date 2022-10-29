import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should rendered the Login Component", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const title = "nuntia.";
      const labelUserName = "User Name:";
      const labelPassword = "Password:";
      const buttonText = "Log In";

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
