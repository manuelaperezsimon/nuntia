import { useEffect } from "react";
import usePosts from "../../hooks/usePosts/usePosts";
import { Posts } from "../../interfaces/postsInterface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import PostCard from "../PostCard/PostCard";
import PostsListStyled from "./PostListStyled";

const PostList = (): JSX.Element => {
  const { getAllPosts } = usePosts();
  const postsList: Posts = useAppSelector((state: RootState) => state.posts);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      <PostsListStyled>
        <ul className="posts__list">
          {postsList.map((post) => (
            <li key={post.id} className="posts__post">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostsListStyled>
    </>
  );
};

export default PostList;
