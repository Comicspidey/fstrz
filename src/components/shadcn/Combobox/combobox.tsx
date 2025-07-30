"use client"

import * as React from "react"
import { CheckIcon, ChevronDown } from "lucide-react"

import cn from "clsx";
import { Button } from "@/components/shadcn/Button/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/shadcn/Command/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/Popover/popover"
import styles from "./combobox.module.css"

interface ComboboxProps {
  users: string[]
  selected: string
  label: string
  placeholder: string
  onSelect: (value: string) => void
  getLabel?: (user: string) => string
  className?: string
}

export function Combobox({ users, label, placeholder, selected, onSelect, getLabel, className }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(styles.combobox__button, className)}
        >
          {selected ? (getLabel ? getLabel(selected) : selected) : label}
          <ChevronDown className={styles.combobox__buttonIcon} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.combobox__content}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>No result.</CommandEmpty>
            <CommandGroup>
              {users.map((user) => (
                <CommandItem
                  key={user}
                  value={user}
                  onSelect={(currentValue) => {
                    const finalValue = currentValue === selected ? "" : currentValue;
                    onSelect(finalValue);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      styles.combobox__checkIcon,
                      selected === user ? styles["combobox__checkIcon--visible"] : styles["combobox__checkIcon--hidden"]
                    )}
                  />
                  {getLabel ? getLabel(user) : user}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
