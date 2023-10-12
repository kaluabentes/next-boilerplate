import type { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"

import "../src/styles/font"
import defaultTheme from "../src/styles/theme"
import GlobalStyles from "../src/styles/GlobalStyles"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        defaultTheme,
      },
      defaultTheme: "defaultTheme",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
