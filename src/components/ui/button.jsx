import { cn } from "@/lib/utils"

export function Button({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  }
  
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md transition-colors font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
