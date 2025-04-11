import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contributors | Nayan Acharya",
  description: "A special thanks to all project contributors",
}

export default function ContributorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

