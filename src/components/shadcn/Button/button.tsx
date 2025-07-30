import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import styles from "./button.module.css"

const variantClasses = {
  default: styles.default,
  destructive: styles.destructive,
  outline: styles.outline,
  secondary: styles.secondary,
  ghost: styles.ghost,
  link: styles.link,
}

const sizeClasses = {
  default: styles.defaultSize,
  sm: styles.sm,
  lg: styles.lg,
  icon: styles.icon,
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: keyof typeof variantClasses
  size?: keyof typeof sizeClasses
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"
  const variantClass = variantClasses[variant] || ""
  const sizeClass = sizeClasses[size] || ""

  return (
    <Comp
      data-slot="button"
      className={`${styles.button} ${variantClass} ${sizeClass} ${className || ""}`}
      {...props}
    />
  )
}

export { Button }
