"use client";

import React from "react";
import { X as IconCross, Search } from "lucide-react";
import styles from "./searchInput.module.css";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  id?: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  ariaLabel,
  id = "search-input",
}) => {
  return (
    <div className={styles.searchInput}>
      <label htmlFor={id} className="sr-only">
        {ariaLabel}
      </label>

      <Search className={styles.searchInput__icon} />

      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.searchInput__field} ${className || ""}`}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
          className={styles.searchInput__clearButton}
          aria-label="Clear input"
        >
          <IconCross />
        </button>
      )}
    </div>
  );
};
