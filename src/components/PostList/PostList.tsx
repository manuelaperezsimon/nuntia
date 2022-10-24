import { useEffect } from "react";
import usePosts from "../../hooks/usePosts/usePosts";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import PostCard from "../PostCard/PostCard";
import PostsListStyled from "./PostListStyled";

const PostList = (): JSX.Element => {
  const { getAllPosts } = usePosts();
  const postsList = useAppSelector((state: RootState) => state.posts);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      <PostsListStyled>
        <ul className="posts__list">
          {postsList.map((post) => (
            <li key={post.title} className="posts__post">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostsListStyled>
    </>
  );
};

export default PostList;
