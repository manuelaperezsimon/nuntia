import styled from "styled-components";

const LoadingStyled = styled.div`
  .spinner__container {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.blackColor};
    font-size: 2rem;
    animation: animate 2s infinite;

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }
  }
`;

export default LoadingStyled;
