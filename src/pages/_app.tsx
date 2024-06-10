import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-slate-950 text-white justify-center items-center h-full">
      <div className="flex w-full h-[90vh] overflow-y-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
