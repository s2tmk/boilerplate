import { css } from "@emotion/react";
import { CommitButtons } from "./components/CommitButtons";
import { FontColorSwitch } from "./components/FontColorSwitch";
import { FontFamilySwitch } from "./components/FontFamilySwitch";
import { MessageInput } from "./components/MessageInput";

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: -0.5rem;
  width: 100%;
  align-items: center;
  text-align: center;
`;

export const PreviewEditor = () => {
  return (
    <section css={sectionStyle}>
      <FontFamilySwitch />
      <MessageInput />
      <FontColorSwitch />
      <CommitButtons />
    </section>
  );
};
