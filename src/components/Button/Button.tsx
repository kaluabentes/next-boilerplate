import { ReactNode } from "react"

import { Container } from "./Button.styles"

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
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  )
}
