import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NavBar from "@/components/nav-bar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
