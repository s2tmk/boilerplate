import { css } from "@emotion/react";

const sectionStyle = css`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const Description = () => {
  return (
    <section css={sectionStyle}>
      <p>今日の一瞬に一言を添えて</p>
    </section>
  );
};
