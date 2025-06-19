import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | FitSphere",
    default: "FitSphere"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ background: "red", padding: '10px' }}>Heading(Marketing)</header>
        {children}
        <footer style={{ background: "green" }}>Footer(Marketing)</footer>
      </body>
    </html>
  );
}
