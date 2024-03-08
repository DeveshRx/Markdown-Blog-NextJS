import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/">
          <header className="h-16 w-full bg-sky-100 shadow-md rounded-md">
            <h1 className="text-center text-lg font-medium pt-4">My Blog</h1>
          </header>
        </Link>
        {children}


        <div className="h-44"></div>

      </body>
    </html>
  );
}
