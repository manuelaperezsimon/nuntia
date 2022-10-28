import { BiLogOut } from "react-icons/bi";

const Header = (): JSX.Element => {
  return (
    <section className="header">
      <h1>nuntia.</h1>
      <BiLogOut onClick={() => {}} data-testid="icon-logout" />
    </section>
  );
};

export default Header;
