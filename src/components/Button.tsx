import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  type = "button",
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
