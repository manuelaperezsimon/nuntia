import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: ${(props) => props.theme.primaryColor};

  .header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    padding: 1rem 1.5rem 0.3rem 1.5rem;
  }

  .header__text {
    color: ${(props) => props.theme.whiteColor};
  }

  .icon-logout {
    font-size: 1.7rem;
    color: ${(props) => props.theme.whiteColor};
  }
`;

export default HeaderStyled;
