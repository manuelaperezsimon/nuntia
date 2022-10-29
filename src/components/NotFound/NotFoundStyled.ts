import styled from "styled-components";

const NotFoundStyled = styled.div`
  margin-top: 4rem;
  padding: 0 2rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  .icon--emoji {
    font-size: 10rem;
  }

  @media (min-width: 900px) {
    .page__heading {
      font-size: 3rem;
    }
  }
`;

export default NotFoundStyled;
