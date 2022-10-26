import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { Post } from "../../interfaces/postsInterface";

interface PostProps {
  post: Post;
}

const Form = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <h2 className="form__heading">Edit the post!</h2>
      <IoIosClose
        className="icon--close"
        data-testid="icon-close"
        onClick={() => {}}
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
              value={""}
              onChange={() => {}}
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
              value={""}
              onChange={() => {}}
            />
          </div>
          <Button
            text="Save"
            type="submit"
            actionOnClick={() => {}}
            isDisabled={true}
            classNameOfType="button button--big"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
