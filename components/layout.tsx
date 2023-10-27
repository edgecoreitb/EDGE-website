import Navbar from "./navbar";
import Footer from "./footer";
import { DEFAULT_FONT } from "@/styles/fonts";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${DEFAULT_FONT.className} flex min-h-screen flex-col items-center`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
