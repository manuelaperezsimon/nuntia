import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers/useUsers";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { logout } = useUsers();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <HeaderStyled>
      <section className="header">
        <h1 className="header__text logo">nuntia.</h1>
        <BiLogOut
          onClick={logoutUser}
          data-testid="icon-logout"
          className="icon-logout"
        />
      </section>
    </HeaderStyled>
  );
};

export default Header;
