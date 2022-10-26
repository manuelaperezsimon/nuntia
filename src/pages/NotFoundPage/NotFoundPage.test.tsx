import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFound page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'NotFound' component", () => {
      const textNotFound = "404: Page not Found";
      const textLink = "Go to posts!";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <NotFoundPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText = screen.getByText(textNotFound);
      const expectedTextLink = screen.getByText(textLink);

      expect(expectedText).toBeInTheDocument();
      expect(expectedTextLink).toBeInTheDocument();
    });
  });
});
