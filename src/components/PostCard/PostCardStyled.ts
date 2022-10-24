import styled from "styled-components";

const PostCardStyled = styled.article`
  .post-card__container {
    background-color: ${(props) => props.theme.secondaryColor};
    border: red solid 1px;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .icon {
    display: grid;
    justify-content: flex-end;
  }
`;

export default PostCardStyled;
