import { fireEvent, render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import "@testing-library/jest-dom"

import Button from "./Button"

expect.extend(toHaveNoViolations)

describe("Button", () => {
  it("should render without problems", async () => {
    render(<Button>Action</Button>)
    expect(screen.getByText("Action")).toBeInTheDocument()
  })

  it("should interact without problems", async () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>Action</Button>)

    await fireEvent.click(screen.getByText("Action"))

    expect(onClick).toHaveBeenCalled()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Button>Action</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
