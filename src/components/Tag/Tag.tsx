import React from 'react';
import clsx from 'clsx';
import styles from "./tag.module.css";

type TagProps = {
  className?: string;
  label: string;
  variant?: "success" | "warning" | "error";
};

const Tag: React.FC<TagProps> = ({
  className,
  label,
  variant = "success",
}) => {
  return (
    <span
      className={clsx(
        styles.tag,
        styles[`tag--${variant}`],
        className
      )}
    >
      {label}
    </span>
  );
};

export default Tag;