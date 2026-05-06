import { cn } from "@/lib/utils"

export function Field({ className, ...props }) {
  return <div className={cn("space-y-2", className)} {...props} />
}

export function FieldLabel({ className, ...props }) {
  return (
    <label className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />
  )
}

export function FieldDescription({ className, ...props }) {
  return (
    <p className={cn("text-sm text-gray-500", className)} {...props} />
  )
}

export function FieldGroup({ className, ...props }) {
  return <fieldset className={cn("space-y-3", className)} {...props} />
}
