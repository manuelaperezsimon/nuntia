import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  classNameOfType: string;
  isDisabled: boolean;
  actionOnClick?: () => void;
}

const Button = ({
  text,
  type,
  classNameOfType,
  isDisabled,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={classNameOfType}
      disabled={isDisabled}
      type={type}
      onClick={actionOnClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
