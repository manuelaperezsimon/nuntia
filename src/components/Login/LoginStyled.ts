import styled from "styled-components";

const LoginStyled = styled.div`
  padding: 1.5rem;

  .heading-login {
    font-weight: bold;
    font-size: 2.5rem;
    color: ${(props) => props.theme.primaryColor};
  }

  .form__text {
    font-size: 1.1rem;
    color: ${(props) => props.theme.primaryColor};
  }

  .form-login {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.8rem;
    border-radius: 0.4rem;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.blackColor};
  }

  .form__label {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .form__input {
    font-size: 1.1rem;
    padding: 0.7rem;
    padding-left: 0.8rem;
    border-radius: 0.2rem;
    width: 100%;
    transition: 0.2s;
    border: 1px solid ${(props) => props.theme.primaryColor};
    font-family: inherit;
  }

  &:focus {
    border-color: ${(props) => props.theme.secondaryColor};
  }

  .button--disabled {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-login {
      width: 60%;
      max-width: 600px;
      padding: 1.8rem 3rem;
    }
  }
`;

export default LoginStyled;
