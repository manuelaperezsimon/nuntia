import { useState } from "react";
import User from "../../interfaces/userInterface";
import Button from "../Button/Button";

const Login = (): JSX.Element => {
  const initialState: User = {
    userName: "",
    password: "",
  };

  const [postEdit, setPostEdit] = useState(initialState);

  const hasOneEmptyField =
    postEdit.userName.length < 1 || postEdit.password.length < 1;

  const onChageData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostEdit({ ...postEdit, [event.target.id]: event.target.value });
  };

  return (
    <>
      <h2 className="form__heading">Welcome back!</h2>
      <form action="" className="form-login" noValidate onSubmit={() => {}}>
        <div className="form-login__group">
          <label htmlFor="userName" className="form__label">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            className="form__input"
            placeholder="Enter your user name :)"
            autoComplete="off"
            required
            value={postEdit.userName}
            onChange={onChageData}
          />
        </div>
        <div className="form-login__group">
          <label htmlFor="password" className="form__label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form__input input-password"
            placeholder="Here your password"
            autoComplete="off"
            required
            value={postEdit.password}
            onChange={onChageData}
          />
        </div>

        <Button
          isDisabled={hasOneEmptyField}
          text="Sign In"
          type="submit"
          classNameOfType="button--big"
          actionOnClick={() => {}}
        />
      </form>
    </>
  );
};

export default Login;
