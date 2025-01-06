import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// wraps around each of the pages
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// this is reserved as well.
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// children var is the content of the page which is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
