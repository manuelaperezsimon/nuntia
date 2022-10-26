import styled from "styled-components";

const PostCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  position: relative;
  font-family: "Poppins", sans-serif;

  .post-card__container {
    background-color: ${(props) => props.theme.secondaryColor};
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .icon {
    display: grid;
    justify-content: flex-end;
  }

  .post-card__author {
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.3rem;
  }
`;

export default PostCardStyled;
