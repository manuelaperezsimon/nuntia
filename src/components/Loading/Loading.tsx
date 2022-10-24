import { ImSpinner7 } from "react-icons/im";
import LoadingStyled from "./LoadingStyled";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): JSX.Element => {
  return (
    <>
      <LoadingStyled>
        <div className="spinner__container">
          {isLoading && <ImSpinner7 data-testid="spinner--loading" />}
        </div>
      </LoadingStyled>
    </>
  );
};

export default Loading;
