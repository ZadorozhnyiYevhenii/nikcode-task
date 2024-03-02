import React from "react";
import './UIButton.scss';

export const UIButton = ({
  children,
  onClickButton,
  type = "button"
}: {
  children: React.ReactNode;
  onClickButton?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <button onClick={onClickButton} type={type} className="ui-button">
      {children}
    </button>
  );
};
