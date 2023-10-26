import { IBM_Plex_Sans_Condensed } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

const DEFAULT_FONT = IBM_Plex_Sans_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${DEFAULT_FONT.className} flex min-h-screen flex-col items-center`}>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  );
}
