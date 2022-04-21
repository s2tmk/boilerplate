import { Global, css } from "@emotion/react";
import { AppProps } from "next/app";
import "./reset.css";

const globalStyle = css`
  body {
    color: #333;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
