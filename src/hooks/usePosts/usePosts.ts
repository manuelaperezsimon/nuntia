import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadAllPostsActionCreator } from "../../store/features/posts/slices/postsSlice";
import { errorModal } from "../../utils/modals";

const usePosts = () => {
  const dispatch = useAppDispatch();

  const getAllPosts = useCallback(async (): Promise<void> => {
    const allPostsURL = "https://jsonplaceholder.typicode.com/posts";

    try {
      const { data } = await axios.get(allPostsURL);
      const postsList = [...data];

      dispatch(loadAllPostsActionCreator(postsList));
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);

  return {
    getAllPosts,
  };
};

export default usePosts;
