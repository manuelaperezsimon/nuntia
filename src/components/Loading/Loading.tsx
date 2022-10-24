import { Waveform } from "@uiball/loaders";
import LoadingStyled from "./LoadingStyled";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): JSX.Element => {
  return (
    <>
      <LoadingStyled>
        <div
          aria-live="polite"
          aria-busy={isLoading}
          className="spinner__container"
        >
          {isLoading && (
            <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
          )}
        </div>
      </LoadingStyled>
    </>
  );
};

export default Loading;
