import { css } from "@emotion/react";

const headerStyle = css`
  display: flex;
  font-family: "Luscious Script";
  letter-spacing: 0.25rem;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

export const Header = () => {
  return <h1 css={headerStyle}>Sho(r)t Message</h1>;
};
