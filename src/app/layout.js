import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import AnimatedCursor from "react-animated-cursor";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ACT",
  description: "Site by akilesh_io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <Script src="//embed.typeform.com/next/embed.js"></Script>
        </Header>
        {/* <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={1}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
            mixBlendMode: "exclusion",
          }}
        /> */}
        {children}
      </body>
    </html>
  );
}
