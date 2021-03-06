import * as React from "react";
import { Link } from "react-router-dom";

const Button: React.FC<IProps> = ({
  children,
  onClick,
  colour = "primary",
  disabled,
  href,
  type = "button",
}) => {
  const common = "px-4 py-2 rounded flex items-center outline-none active:outline-none focus:outline-none";
  const primaryCommon = `bg-primary text-sm text-bg ${common}`;
  const secondaryCommon = `bg-bg text-sm text-primary ${common}`;
  const sidebarCommon = `bg-transparent text-sm text-faded flex items-center justify-between w-full outline-none active:outline-none focus:outline-none text-left`;
  const classes: {
    [key in Colours]: {
      disabled: string;
      default: string;
    };
  } = {
    blank: {
      default: "outline-none active:outline-none focus:outline-none",
      disabled: "outline-none active:outline-none focus:outline-none",
    },
    link: {
      default: "text-primary font-inherit underline outline-none active:outline-none focus:outline-none",
      disabled: "text-primary font-inherit outline-none active:outline-none focus:outline-none",
    },
    primary: {
      default: primaryCommon,
      disabled: `${primaryCommon} cursor-not-allowed opacity-50`,
    },
    secondary: {
      default: secondaryCommon,
      disabled: `${secondaryCommon} cursor-not-allowed opacity-50`,
    },
    sidebar: {
      default: sidebarCommon,
      disabled: `${sidebarCommon} cursor-not-allowed opacity-50`,
    },
  };
  const className = classes[colour][disabled ? "disabled" : "default"];
  return href ? (
    <Link
      to={href}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

interface IProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  colour?: Colours;
  type?: "submit" | "button";
  href?: string;
}

type Colours = "primary" | "secondary" | "blank" | "link" | "sidebar";

export default Button;
