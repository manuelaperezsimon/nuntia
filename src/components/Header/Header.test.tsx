import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import Header from "./Header";

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
});
