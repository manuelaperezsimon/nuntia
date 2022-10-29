import styled from "styled-components";

const PostCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  .post-card__container {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.whiteColor};
    border-radius: 0.4rem;
    padding: 2.2rem;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
  }

  .post-card {
    &__author {
      color: ${(props) => props.theme.primaryColor};
      font-size: 1.2rem;
    }

    &__title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    &__content {
      font-weight: lighter;
      color: ${(props) => props.theme.greyColor};
    }

    &__footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
    }
  }

  .button--small {
    width: 50%;
  }

  @media (min-width: 900px) {
    display: -webkit-box;
    height: 100%;
  }
`;

export default PostCardStyled;
