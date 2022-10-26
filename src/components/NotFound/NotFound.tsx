import { ImConfused } from "react-icons/im";

const NotFound = (): JSX.Element => {
  return (
    <>
      <ImConfused className="icon--emoji" data-testid="icon-emoji" />
      <h2>404: Page not Found</h2>
    </>
  );
};

export default NotFound;
