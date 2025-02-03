import localFont from "next/font/local";
import "./globals.css";

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Buttonknow from './components/Layout/Buttonknow';
// import Registration from "./components/Layout/Registration";
import MainMenu from "./components/MainMenu";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nocaute Clube Boxe",
  description: "Nocaute Clube Boxe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
          <MainMenu/>
          {children}
          <Buttonknow/>
        <Footer />
      </body>
    </html>
  );
}
