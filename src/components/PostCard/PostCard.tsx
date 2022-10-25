import { Post } from "../../interfaces/postsInterface";
import { FaRegTrashAlt } from "react-icons/fa";
import PostCardStyled from "./PostCardStyled";
import usePosts from "../../hooks/usePosts/usePosts";
import { SyntheticEvent } from "react";
import "react-toastify/dist/ReactToastify.css";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post: { userName, title, body, id },
}: PostCardProps): JSX.Element => {
  const { deletePost } = usePosts();

  const removePost = (event: SyntheticEvent) => {
    event.preventDefault();
    deletePost(id);
  };

  return (
    <>
      <PostCardStyled>
        <div className="post-card__container">
          <div className="icon">
            <FaRegTrashAlt onClick={removePost} data-testid="icon-trash" />
          </div>
          <span className="post-card__author">{userName}</span>
          <h3 className="post-card__title">{title}</h3>
          <p className="post-card__content">{body}</p>
        </div>
      </PostCardStyled>
    </>
  );
};

export default PostCard;
