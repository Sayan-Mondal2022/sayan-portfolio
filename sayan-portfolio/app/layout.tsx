import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sayan Mondal | AI & ML Full Stack Developer",
  description: "Portfolio of Sayan Mondal, CSE AI & ML student and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-primary text-pure antialiased min-h-screen selection:bg-accent selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
