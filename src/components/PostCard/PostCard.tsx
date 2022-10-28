import { Post } from "../../interfaces/postsInterface";
import { FaRegTrashAlt } from "react-icons/fa";
import PostCardStyled from "./PostCardStyled";
import usePosts from "../../hooks/usePosts/usePosts";
import { SyntheticEvent } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post: { userName, title, body, id },
}: PostCardProps): JSX.Element => {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const removePost = (event: SyntheticEvent) => {
    event.preventDefault();

    deletePost(id);
  };

  const goToFormEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <PostCardStyled>
        <div className="post-card__container">
          <span className="post-card__author">{userName}</span>
          <h3 className="post-card__title">{title}</h3>
          <p className="post-card__content">{body}</p>
          <div className="post-card__footer">
            <Button
              text="Edit"
              type="button"
              actionOnClick={goToFormEdit}
              isDisabled={false}
              classNameOfType="button button--small"
            />
            <div className="icon">
              <FaRegTrashAlt onClick={removePost} data-testid="icon-trash" />
            </div>
          </div>
        </div>
      </PostCardStyled>
    </>
  );
};

export default PostCard;
