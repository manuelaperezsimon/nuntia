import { BiLogOut } from "react-icons/bi";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <section className="header">
        <h1>nuntia.</h1>
        <BiLogOut onClick={() => {}} data-testid="icon-logout" />
      </section>
    </HeaderStyled>
  );
};

export default Header;
