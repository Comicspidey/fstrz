import React from "react";
import cn from "clsx";
import { X as IconCross } from "lucide-react";
import styles from "./button.module.css";

type ButtonProps = {
  className?: string;
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "ghost" | "isLink" | "isTag";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  iconLeft,
  iconRight,
  label,
  onClick,
  variant = "default",
}) => {
  const showIconRight = variant === "isTag" ? <IconCross className={styles.button__iconRight} /> : iconRight;

  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        variant === "ghost" && styles["button--ghost"],
        variant === "isLink" && styles["button--isLink"],
        variant === "isTag" && styles["button--isTag"],
        (iconLeft || showIconRight) && styles["button--withIcon"],
        className
      )}
    >
      {iconLeft && <span className={styles.button__iconLeft}>{iconLeft}</span>}
      {label}
      {showIconRight && <span className={styles.button__iconRight}>{showIconRight}</span>}
    </button>
  );
};
