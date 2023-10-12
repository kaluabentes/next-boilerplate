import { fireEvent, render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"

import defaultTheme from "@/styles/theme"

import Button from "./Button"

expect.extend(toHaveNoViolations)

const ThemedButton = ({ onClick = () => "something" }) => (
  <ThemeProvider theme={defaultTheme}>
    <Button onClick={onClick}>Action</Button>
  </ThemeProvider>
)

describe("Button", () => {
  it("should render without problems", async () => {
    render(<ThemedButton />)
    expect(screen.getByText("Action")).toBeInTheDocument()
  })

  it("should interact without problems", async () => {
    const onClick = jest.fn()

    render(<ThemedButton onClick={onClick} />)

    await fireEvent.click(screen.getByText("Action"))

    expect(onClick).toHaveBeenCalled()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedButton />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
