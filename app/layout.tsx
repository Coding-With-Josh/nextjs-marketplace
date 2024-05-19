export const metadata = {
  title: 'Twist',
  description: 'Learning, Chatting, Trading- But with a twist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
