import { ImConfused } from "react-icons/im";
import { Link } from "react-router-dom";
import ButtonStyled from "../Button/ButtonStyled";
import NotFoundStyled from "./NotFoundStyled";

const NotFound = (): JSX.Element => {
  return (
    <>
      <NotFoundStyled>
        <section className="container">
          <ImConfused className="icon--emoji" data-testid="icon-emoji" />
          <h2>There's nothing around here!</h2>
          <Link to={"/posts"}>
            <ButtonStyled className="button-link">Go to posts!</ButtonStyled>
          </Link>
        </section>
      </NotFoundStyled>
    </>
  );
};

export default NotFound;
