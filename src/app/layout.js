import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Home Page description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[rgb(187,192,195)] font-primary">
       
      {children}</body>
    </html>
  );
}
