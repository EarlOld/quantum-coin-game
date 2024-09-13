import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type AnimatedButtonProps = {
  onClick: () => void;
  text: string;
  type?: "primary" | "secondary";
};

const Button: React.FC<AnimatedButtonProps> = ({
  onClick,
  text,
  type = "primary",
}) => {
  return (
    <button
      className={classNames(styles.button, styles[type])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
