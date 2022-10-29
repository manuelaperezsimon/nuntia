import { useEffect } from "react";
import usePosts from "../../hooks/usePosts/usePosts";
import { Posts } from "../../interfaces/postsInterface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Header from "../Header/Header";
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
      <Header />
      <PostsListStyled>
        <h2 className="posts-list__heading">
          Wow, you don't understand anything, do you?
        </h2>
        <span className="list__text">Use the translator :)</span>
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
