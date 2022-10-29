import styled from "styled-components";

const PostsListStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;

  .header__title {
    font-size: 1.3rem;
  }

  .posts__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;
    padding: 0;
  }

  .posts-list__heading {
    color: ${(props) => props.theme.primaryColor};
    text-align: justify;
  }

  .list__text {
    color: ${(props) => props.theme.blackColor};
  }
`;

export default PostsListStyled;
