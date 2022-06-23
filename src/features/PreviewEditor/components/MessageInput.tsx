import { css } from "@emotion/react";
import { usePreviewState } from "hooks/usePreviewState";
import { ChangeEvent } from "react";

const sectionStyle = () => css`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  input {
    background-color: transparent;
    width: 8rem;
    border: none;
    outline: 0px;
    border-radius: 0%;
    font-size: 16px;
    border-bottom: 1px solid black;
    &:focus {
      border-bottom: 2px solid black;
    }
  }
`;

export const MessageInput = () => {
  const { preview, setPreview } = usePreviewState();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreview({ ...preview, message: e.target.value });
  };

  return (
    <section css={sectionStyle}>
      <p>なんて言葉を添えよう？</p>
      <input type="text" onChange={onChange} value={preview.message} />
    </section>
  );
};
