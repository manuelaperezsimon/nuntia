import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { Post } from "../../interfaces/postsInterface";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostProps {
  post: Post;
}

const Form = ({ post }: PostProps): JSX.Element => {
  const [postEdit, setPostEdit] = useState(post);
  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostEdit({ ...postEdit, [event.target.id]: event.target.value });
  };

  const navigateToPostsList = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate("/posts");
  };
  const hasOneEmptyField =
    postEdit.title.length < 1 || postEdit.body.length < 1;

  return (
    <>
      <h2 className="form__heading">Edit the post!</h2>
      <IoIosClose
        className="icon--close"
        data-testid="icon-close"
        onClick={navigateToPostsList}
      />
      <form
        action=""
        className="form"
        noValidate
        onSubmit={() => {}}
        data-testid="form"
      >
        <div className="inputs__group">
          <div className="form__group">
            <label htmlFor="title" className="form__label"></label>
            <input
              type="text"
              id="title"
              className="form-__input input-title"
              placeholder="THE title for your post:)"
              autoComplete="off"
              required
              value={postEdit.title}
              onChange={onChangeData}
            />
          </div>
          <div className="form__group">
            <label htmlFor="body" className="form__label"></label>
            <input
              type="text"
              id="body"
              className="form__input"
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
    </>
  );
};

export default Form;
