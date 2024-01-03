import { Inter } from "next/font/google";
import "./globals.css";

import Footer from '@/components/Footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Silicon Sage",
  description: "where you find every thing about \"IT\" ",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
          {children}
       <Footer/>
      </body>
    </html>
  );
}
