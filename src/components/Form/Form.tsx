import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { Post } from "../../interfaces/postsInterface";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts/usePosts";
import FormStyled from "./FormStyled";

interface PostProps {
  post: Post;
}

const Form = ({ post }: PostProps): JSX.Element => {
  const { editPost } = usePosts();
  const [postEdit, setPostEdit] = useState(post);
  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostEdit({ ...postEdit, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    await editPost(postEdit);

    navigate("/posts");
  };

  const navigateToPostsList = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate("/posts");
  };
  const hasOneEmptyField =
    postEdit.title.length < 1 || postEdit.body.length < 1;

  return (
    <>
      <FormStyled>
        <div className="form__header">
          <h2 className="form__heading">Edit the post!</h2>
          <IoIosClose
            className="icon--close"
            data-testid="icon-close"
            onClick={navigateToPostsList}
          />
        </div>
        <form
          action=""
          className="form"
          noValidate
          onSubmit={onSubmitData}
          data-testid="form"
        >
          <div className="textarea__group">
            <div className="form__group group__title">
              <label htmlFor="title" className="form__label">
                Change the title here:
              </label>
              <textarea
                id="title"
                className="form__textarea textarea-title"
                placeholder="THE title for your post:)"
                autoComplete="off"
                required
                value={postEdit.title}
                onChange={onChangeData}
              />
            </div>
            <div className="form__group group__content">
              <label htmlFor="body" className="form__label">
                Other idea?
              </label>
              <textarea
                id="body"
                className="form__textarea"
                placeholder="Write your post!"
                autoComplete="off"
                required
                value={postEdit.body}
                onChange={onChangeData}
              />
            </div>
            <Button
              text="Save"
              type="submit"
              actionOnClick={() => {}}
              isDisabled={hasOneEmptyField}
              classNameOfType="button button--big"
            />
          </div>
        </form>
      </FormStyled>
    </>
  );
};

export default Form;
