import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

let mockLogout = jest.fn();
jest.mock("../../hooks/useUsers/useUsers", () => () => ({
  logout: mockLogout,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading and a icon", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const titleHeader = "nuntia.";

      const headerElements = [
        screen.getByRole("heading", {
          name: titleHeader,
        }),
        screen.getByTestId("icon-logout"),
      ];

      headerElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe("When the user click in logout icon", () => {
    test("Then it should call the logout function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const logoutIcon = screen.getByTestId("icon-logout");

      await userEvent.click(logoutIcon);
      expect(mockLogout).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
