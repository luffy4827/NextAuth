import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Authentication using Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={children.session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
