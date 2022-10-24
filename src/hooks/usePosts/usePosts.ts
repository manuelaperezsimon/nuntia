import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadAllPostsActionCreator } from "../../store/features/slices/posts/postsSlice";
import { errorModal } from "../../utils/modals";
import { Posts } from "../../interfaces/postsInterface";

const usePosts = () => {
  const dispatch = useAppDispatch();

  const getAllPosts = useCallback(async (): Promise<void> => {
    const allPostsURL = "https://jsonplaceholder.typicode.com/posts";
    const userURL = "https://jsonplaceholder.typicode.com/users/";

    try {
      const { data } = await axios.get(allPostsURL);
      const rawPosts: Posts = data;

      const promiseList = rawPosts.map(async (post) => {
        const { data: user } = await axios.get(`${userURL}${post.userId}`);
        return { ...post, userName: user.name };
      });

      const postsList: Posts = await Promise.all(promiseList);

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
