import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  border: 1px solid transparent;
  border-radius: 0.2rem;
  padding: 0.7rem 1.6rem;
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;

  .button--small {
    width: 50%;
  }
`;

export default ButtonStyled;
