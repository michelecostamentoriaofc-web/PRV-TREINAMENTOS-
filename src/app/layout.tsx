import "./globals.css";

export const metadata = {
  title: "PRV Training Platform",
  description: "Global platform for live and on-demand training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
