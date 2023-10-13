"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "@/styles/GlobalStyles"
import defaultTheme from "@/styles/theme"

interface RootProvidersProps {
  children: ReactNode
}

const RootProviders = ({ children }: RootProvidersProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default RootProviders
