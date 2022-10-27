import Button from "../Button/Button";

const Login = (): JSX.Element => {
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
            value={""}
            onChange={() => {}}
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
            value={""}
            onChange={() => {}}
          />
        </div>

        <Button
          isDisabled={false}
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
