import { ButtonType } from "./type";

function Button({ style, onButtonClick, isDisabled, children }: ButtonType) {
  return (
    <button
      className={style}
      onClick={onButtonClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button;
