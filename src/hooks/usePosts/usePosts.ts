import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  deletePostActionCreator,
  editPostActionCreator,
  loadAllPostsActionCreator,
} from "../../store/features/slices/posts/postsSlice";
import { errorModal, successModal } from "../../utils/modals";
import { Posts, Post } from "../../interfaces/postsInterface";
import { isLoadingActionCreator } from "../../store/features/slices/loading/loadingSlice";

const usePosts = () => {
  const dispatch = useAppDispatch();

  const getAllPosts = useCallback(async (): Promise<void> => {
    const allPostsURL = "https://jsonplaceholder.typicode.com/posts";
    const userURL = "https://jsonplaceholder.typicode.com/users/";

    try {
      dispatch(isLoadingActionCreator());
      const { data } = await axios.get(allPostsURL);
      const rawPosts: Posts = data;

      const promiseList = rawPosts.map(async (post) => {
        const { data: user } = await axios.get(`${userURL}${post.userId}`);
        return { ...post, userName: user.name };
      });

      const postsList: Posts = await Promise.all(promiseList);

      dispatch(loadAllPostsActionCreator(postsList));
      dispatch(isLoadingActionCreator());
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);

  const deletePost = useCallback(
    async (postId: number) => {
      const postWithIdURL = "https://jsonplaceholder.typicode.com/posts/";

      try {
        dispatch(isLoadingActionCreator());
        await axios.delete(`${postWithIdURL}${postId}`);
        dispatch(deletePostActionCreator(postId));

        dispatch(isLoadingActionCreator());
        successModal("Great! The post has been deleted!");
      } catch (error) {
        errorModal("Oops, something went wrong :(");
      }
    },
    [dispatch]
  );

  const editPost = useCallback(
    async (post: Post) => {
      const postWithIdURL = "https://jsonplaceholder.typicode.com/posts/";

      try {
        dispatch(isLoadingActionCreator());
        const { data: editedPost } = await axios.put(
          `${postWithIdURL}${post.id}`,
          post,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        dispatch(editPostActionCreator(editedPost));

        dispatch(isLoadingActionCreator());
        successModal("Hey! The post has been edited!");
      } catch (error) {
        errorModal("Oops, something went wrong :(");
      }
    },
    [dispatch]
  );

  return {
    getAllPosts,
    deletePost,
    editPost,
  };
};

export default usePosts;
