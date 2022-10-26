import { ImConfused } from "react-icons/im";

const NotFound = (): JSX.Element => {
  return (
    <>
      <ImConfused className="icon--emoji" data-testid="icon-emoji" />
      <h2>Page not Found, go to posts!</h2>
    </>
  );
};

export default NotFound;
