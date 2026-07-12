import "./globals.css";

export const metadata = {
  title: "PRV Treinamentos",
  description: "Plataforma global de treinamentos profissionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
