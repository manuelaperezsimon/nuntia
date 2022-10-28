import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import NotFound from "./NotFound";

describe("Given a Not Found component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show an icon and a text and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NotFound />
          </BrowserRouter>
        </Provider>
      );

      const textHeading = "There's nothing around here!";
      const textButton = "Go to posts!";

      const notFoundElements = [
        screen.getByTestId("icon-emoji"),
        screen.getByRole("heading", { name: textHeading }),
        screen.getByRole("button", { name: textButton }),
      ];

      notFoundElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
