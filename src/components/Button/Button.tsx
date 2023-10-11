import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}
