import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.blackColor};
  border: 1px solid transparent;
  width: fit-content;
  display: inline-block;
  text-decoration: none;
`;

export default ButtonStyled;
