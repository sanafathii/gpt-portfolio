import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "gpt - Portfolio",
  description: "A showcase of my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
