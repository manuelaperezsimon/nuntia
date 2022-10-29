import { SyntheticEvent, useState } from "react";
import useUsers from "../../hooks/useUsers/useUsers";
import User from "../../interfaces/userInterface";
import Button from "../Button/Button";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const initialState: User = {
    userName: "",
    password: "",
  };

  const { checkLogin } = useUsers();

  const [userInfo, setUserInfo] = useState(initialState);

  const hasOneEmptyField =
    userInfo.userName.length < 1 || userInfo.password.length < 1;

  const onChageData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    await checkLogin({
      userName: userInfo.userName,
      password: userInfo.password,
    });
  };

  return (
    <>
      <LoginStyled>
        <h1>nuntia.</h1>
        <h3 className="heading-login">Log In</h3>
        <form
          action=""
          className="form-login"
          noValidate
          onSubmit={onSubmitData}
        >
          <span className="form__text">
            Enjoy the posts of the world in latin!
          </span>
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
              value={userInfo.userName}
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
              value={userInfo.password}
              onChange={onChageData}
            />
          </div>

          <div className="form-login__group">
            <Button
              isDisabled={hasOneEmptyField}
              text="Log In"
              type="submit"
              classNameOfType="button button--big"
            />
          </div>
        </form>
      </LoginStyled>
    </>
  );
};

export default Login;
