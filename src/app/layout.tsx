import type { Metadata } from "next"

import StyledComponentsRegistry from "@/lib/styled-components/StyledComponentsRegistry"
// import "@/styles/font"

import RootProviders from "./providers"

export const metadata: Metadata = {
  title: "Droptron",
  description: "A Shopify purchasing experience from space",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <RootProviders>{children}</RootProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
