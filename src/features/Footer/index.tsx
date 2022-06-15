import { css } from "@emotion/react";

const footerStyle = css`
  display: flex;
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  font-size: 0.75rem;
  font-family: "Hannari Mincho";
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return <footer css={footerStyle}>&copy; iloneer</footer>;
};
