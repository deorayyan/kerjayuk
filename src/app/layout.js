import { Rubik, Open_Sans } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: "KerjaYuk!",
  description: "PCS Frontend Developer Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
