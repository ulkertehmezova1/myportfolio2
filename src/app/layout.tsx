import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: "500", variable: "--font-poppins" });

const acorn = localFont({
  src: [
    {
      path: "../../public/fonts/acorn/Acorn-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/acorn/Acorn-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-acorn",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${acorn.variable} flex h-full`}>
       <Head>
        <title>Ulker Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="text-header bg-bgBody min-h-[100vh] h-full flex flex-col justify-between overflow-x-hidden max-w-full grow">
        <div className="body-container">
          <Header />
          <div className="relative flex flex-col">{children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
