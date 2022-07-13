import { Global, css } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "./reset.css";

const globalStyle = css`
  body {
    color: #333;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    background-image: url("/background.webp");
    background-repeat: repeat;
  }

  p {
    width: 70%;
    font-family: "Hannari Mincho";
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    margin: auto;
  }

  .selector {
    font-family: "Luscious Script";
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }

  .destructive {
    color: #ff4500;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
