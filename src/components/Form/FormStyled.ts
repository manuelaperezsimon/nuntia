import styled from "styled-components";

const FormStyled = styled.div`
  padding: 1.5rem;

  .form__heading {
    font-weight: bold;
    font-size: 2.5rem;
    color: ${(props) => props.theme.primaryColor};

    &__label {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }
  }

  .icon--close {
    font-size: 3rem;
    cursor: pointer;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 33rem;
    padding: 1.8rem;
    border-radius: 0.4rem;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.blackColor};
    max-width: 33rem;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__textarea {
      font-size: 1.1rem;
      padding: 0.7rem;
      padding-left: 0.8rem;
      border-radius: 0.2rem;
      height: 8rem;
      width: 100%;
      transition: 0.2s;
      border: 1px solid ${(props) => props.theme.primaryColor};
      font-family: inherit;
    }

    &:focus {
      border-color: ${(props) => props.theme.secondaryColor};
    }
  }

  .textarea__group {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .button--disabled {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form {
      width: 60%;
      max-width: 600px;
      padding: 1.8rem 3rem;
    }

    .icon--close {
      font-size: 4rem;
    }

    .form__header {
      width: 60%;
      max-width: 600px;
    }
  }
`;

export default FormStyled;
