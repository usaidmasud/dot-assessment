import React from "react";
import "./Button.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  block?: boolean;
}
export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  block,
  ...props
}: ButtonProps) {
  const classNames = `button button-${variant} button-${size} ${
    block ? "button-block" : ""
  }`;
  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
