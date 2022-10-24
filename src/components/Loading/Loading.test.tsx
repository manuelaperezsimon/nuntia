import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated with a prop isLoading with true value", () => {
    test("Then it should show the component", () => {
      const isLoading = true;
      render(<Loading isLoading={isLoading} />);

      const loadingSpinner = screen.queryByTestId("spinner--loading");
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a prop isLoading with false value", () => {
    test("Then it shouldn't show the component", () => {
      const isLoading = false;
      render(<Loading isLoading={isLoading} />);

      const loadingSpinner = screen.queryByTestId("spinner--loading");
      expect(loadingSpinner).not.toBeInTheDocument();
    });
  });
});
