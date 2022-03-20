import "../styles/reset.css";
import { GlobalStyle } from "../styles/style";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";

nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <div>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </>
  );
}

export default MyApp;