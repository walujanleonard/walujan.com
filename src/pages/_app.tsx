import { Footer } from "@/components/Layouts/Footer";
import { Navbar } from "@/components/Layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { AnalyticsScripts } from "@/components/Scripts/Analytics";

const progress = new ProgressBar({
  size: 2,
  color: "#f0ebdf",
  className: "bar-of-progress",
  delay: 0,
});

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <AnalyticsScripts />
      </AnimatePresence>
    </ThemeProvider>
  );
}
