import React from "react";
import './UIButton.scss';

export const UIButton = ({
  children,
  onClickButton,
}: {
  children: React.ReactNode;
  onClickButton: () => void;
}) => {
  return (
    <button onClick={onClickButton} type="button" className="ui-button">
      {children}
    </button>
  );
};
