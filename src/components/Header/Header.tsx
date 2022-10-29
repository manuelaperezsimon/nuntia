import { BiLogOut } from "react-icons/bi";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <section className="header">
        <h1 className="header__text logo">nuntia.</h1>
        <BiLogOut
          onClick={() => {}}
          data-testid="icon-logout"
          className="icon-logout"
        />
      </section>
    </HeaderStyled>
  );
};

export default Header;
