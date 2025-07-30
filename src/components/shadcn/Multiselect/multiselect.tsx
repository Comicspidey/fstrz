import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import cn from "clsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/shadcn/Command/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/Popover/popover"
import { Button } from "@/components/shadcn/Button/button"

import styles from "./multiselect.module.css"

type Option = {
  label: string
  value: string
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  label?: string
  placeholder?: string
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  label = "Sélectionner...",
  placeholder = "Sélectionner...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value))
    } else {
      onChange([...selected, value])
    }
  }

  return (
    <div className={cn(styles.container, className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={styles.button}
          >
            {selected.length > 0
              ? `${selected.length} sélectionné(s)`
              : label}
            <ChevronDown className={styles.chevron} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={styles.popoverContent}>
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => toggleOption(option.value)}
                >
                  <div
                    className={cn(
                      styles.checkbox,
                      selected.includes(option.value) && styles.checked
                    )}
                  >
                    {selected.includes(option.value) && (
                      <Check className={styles.checkIcon} />
                    )}
                  </div>
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
