import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
    >
      {children || "Button"}
    </button>
  );
};

export default Button;
