import React from 'react';
import cn from 'clsx';
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
      className={cn(
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