import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { store } from "../../store/store";
import { fakeListPosts } from "../../test-utils/mocks/posts/postsMocks";
import FormPage from "./FormPage";

const mockUseParams = jest.fn();
const mockUseAppSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockUseParams(),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUseAppSelector(),
}));

const mockNavigate = jest.fn();

jest.mock("react-toastify");

describe("Given a FormPage component", () => {
  describe("When it receives an id", () => {
    test("Then it should render the form component", async () => {
      mockUseParams.mockReturnValue({ id: fakeListPosts[0].id });
      mockUseAppSelector.mockReturnValue(fakeListPosts);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedTextButton = "Save";
      const buttonInForm = screen.getByRole("button", {
        name: expectedTextButton,
      });

      await waitFor(() => {
        expect(buttonInForm).toBeInTheDocument();
      });
    });
  });

  describe("When received an id that doesn't exist", () => {
    test("Then it should navigate to posts and show a modal error", () => {
      mockUseParams.mockReturnValue({ id: 4 });
      mockUseAppSelector.mockReturnValue(fakeListPosts);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        "Oops, something went wrong :(",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });
  });

  describe("When received an empty list", () => {
    test("Then it not rendered the component", () => {
      mockUseParams.mockReturnValue({});
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormPage />
          </BrowserRouter>
        </Provider>
      );

      const textButton = "Save";
      const buttonInForm = screen.queryByText(textButton);

      expect(buttonInForm).toBeNull();
    });
  });
});
