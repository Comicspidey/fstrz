import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import styles from "./command.module.css"

function Command({
  className = "",
  ...props
}: React.ComponentProps<typeof CommandPrimitive> & { className?: string }) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={`${styles.command} ${className}`}
      {...props}
    />
  )
}

function CommandInput({
  className = "",
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input> & { className?: string }) {
  return (
    <div data-slot="command-input-wrapper" className={styles.commandInputWrapper}>
      <SearchIcon className={styles.searchIcon} />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={`${styles.commandInput} ${className}`}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className = "",
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List> & { className?: string }) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={`${styles.commandList} ${className}`}
      {...props}
    />
  )
}

function CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={styles.commandEmpty}
      {...props}
    />
  )
}

function CommandGroup({
  className = "",
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group> & { className?: string }) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={`${styles.commandGroup} ${className}`}
      {...props}
    />
  )
}

function CommandItem({
  className = "",
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item> & { className?: string }) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={`${styles.commandItem} ${className}`}
      {...props}
    />
  )
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
}
