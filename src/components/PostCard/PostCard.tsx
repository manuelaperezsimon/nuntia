import { Post } from "../../interfaces/postsInterface";
import { FaRegTrashAlt } from "react-icons/fa";
import PostCardStyled from "./PostCardStyled";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post: { userName, title, body },
}: PostCardProps): JSX.Element => {
  return (
    <>
      <PostCardStyled>
        <div className="post-card__container">
          <div className="icon" data-testid="icon-trash">
            <FaRegTrashAlt />
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
