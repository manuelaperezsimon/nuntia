import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { loadAllPostsActionCreator } from "../../store/features/posts/slices/postsSlice";
import fakeListPosts from "../../test-utils/mocks/posts/postsMocks";
import usePosts from "./usePosts";
import axios from "axios";
import { toast } from "react-toastify";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a usePosts function", () => {
  const {
    result: {
      current: { getAllPosts },
    },
  } = renderHook(usePosts);
  describe("When getAllPosts it's invoked", () => {
    test("Then it should call dispatch with loadAllWishesActionCreator with that list", async () => {
      await act(async () => {
        await getAllPosts();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllPostsActionCreator(fakeListPosts)
        );
      });
    });

    describe("When getAllPosts function it's invoked and something went wrong", () => {
      test("Then it should call a modal with a message", async () => {
        axios.defaults.headers.get["IsTestError"] = true;

        await act(async () => {
          await getAllPosts();
        });

        expect(toast.error).toHaveBeenCalledWith(
          "Oops, something went wrong :(",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        delete axios.defaults.headers.get["IsTestError"];
      });
    });
  });
});
