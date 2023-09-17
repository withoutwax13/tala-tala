import "./globals.css";
import { Inter } from "next/font/google";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import SideMenu from "@components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tala-tala",
  description: "Nya uno pa? Tala-tala na.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
          <div className="flex flex-row">
            <SideMenu />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
