import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
  deletePostActionCreator,
  loadAllPostsActionCreator,
} from "../../store/features/slices/posts/postsSlice";
import usePosts from "./usePosts";
import axios from "axios";
import { toast } from "react-toastify";
import { fakeListPostsWithUserName } from "../../test-utils/mocks/posts/postsMocks";
import { isLoadingActionCreator } from "../../store/features/slices/loading/loadingSlice";

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

  const {
    result: {
      current: { deletePost },
    },
  } = renderHook(usePosts);
  describe("When getAllPosts it's invoked", () => {
    test("Then it should call dispatch with loadAllWishesActionCreator with that list", async () => {
      await act(async () => {
        await getAllPosts();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllPostsActionCreator(fakeListPostsWithUserName)
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

    describe("When deletePost it's invoked with a post id", () => {
      test("Then it should call de dispatch with the deleteActionCreator with this id and the isLoadingActionCreator", async () => {
        await act(async () => {
          await deletePost(fakeListPostsWithUserName[0].id);
        });

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(
            deletePostActionCreator(fakeListPostsWithUserName[0].id)
          );
        });
      });

      test("Then it should call the dispatch with isLoadingActionCreator", async () => {
        await act(async () => {
          await deletePost(fakeListPostsWithUserName[0].id);
        });

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(
            isLoadingActionCreator()
          );
        });
      });
    });

    describe("When deletePost it's invoked with a post id and the deleted was ok", () => {
      test("Then it should call the success modal", async () => {
        await act(async () => {
          await deletePost(fakeListPostsWithUserName[0].id);
        });

        expect(toast.success).toHaveBeenCalledWith(
          "Great! The post has been deleted!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });

    describe("When deletePost it's invoked with a wrong id", () => {
      test("Then it call de errorModal", async () => {
        const wrongId = 10;

        await act(async () => {
          await deletePost(wrongId);
        });

        expect(toast.error).toHaveBeenCalledWith(
          "Oops, something went wrong :(",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });
});
