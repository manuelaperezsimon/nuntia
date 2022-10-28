import { act, renderHook, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { isLoadingActionCreator } from "../../store/features/slices/loading/loadingSlice";
import { loginActionCreator } from "../../store/features/slices/users/usersSlice";
import fakeUser from "../../test-utils/mocks/users/users";
import Wrapper from "../../utils/Wrapper";
import useUsers from "./useUsers";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useUsers function", () => {
  const {
    result: {
      current: { checkLogin },
    },
  } = renderHook(useUsers, { wrapper: Wrapper });
  describe("When checkLogin it's invoked", () => {
    test("Then it should call the dispatch with isLoadingActionCreator", async () => {
      await act(async () => {
        await checkLogin(fakeUser);
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(isLoadingActionCreator());
      });
    });

    test("Then it should call the dispatch with loginActionCreator with the user", async () => {
      await act(async () => {
        await checkLogin(fakeUser);
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loginActionCreator(fakeUser)
        );
      });
    });
  });
});

describe("When checkLogin it's invoked with a invalid username", () => {
  test("Then it should call the dispatch with isLoadingActionCreator and the error modal", async () => {
    const {
      result: {
        current: { checkLogin },
      },
    } = renderHook(useUsers, { wrapper: Wrapper });

    await act(async () => {
      await checkLogin({ password: "", userName: "Pepito" });
    });

    await waitFor(() => {
      expect(mockUseDispatch).toHaveBeenCalledWith(isLoadingActionCreator());
    });
    expect(toast.error).toHaveBeenCalledWith("Oops, something went wrong :(", {
      position: toast.POSITION.TOP_CENTER,
    });
  });
});
