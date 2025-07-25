import React from 'react';
import clsx from 'clsx';
import styles from "./button.module.css";

type ButtonProps = {
  className?: string;
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({
  className,
  iconLeft,
  iconRight,
  label,
  onClick,
  variant = 'default',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        variant === 'ghost' && styles['button--ghost'],
        className
      )}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {label}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};
