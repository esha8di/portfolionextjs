import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSprovider from "./AOSprovider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio || Esha",
  description: "Shumin Nahar Esha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212223]`}
      >
        <AOSprovider />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}