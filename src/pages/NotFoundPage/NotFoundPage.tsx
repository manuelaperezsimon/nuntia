import { Link } from "react-router-dom";
import ButtonStyled from "../../components/Button/ButtonStyled";
import NotFound from "../../components/NotFound/NotFound";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NotFound />
      <Link to={"/posts"}>
        <ButtonStyled className="button-link">Go to posts!</ButtonStyled>
      </Link>
    </>
  );
};
export default NotFoundPage;
