import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
import { ThemeProvider } from "next-themes";

nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
