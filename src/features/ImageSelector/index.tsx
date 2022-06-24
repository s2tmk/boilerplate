import { css } from "@emotion/react";
import { usePreviewState } from "hooks/usePreviewState";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const sectionStyle = css`
  width: 100%;
  padding-top: 60vw;
  margin-top: 2rem;
  background-image: url("sample.webp");
  background-size: cover;
  position: relative;
  &:after {
    content: "写真を選ぼう Tap Here!\\A ✔︎ 写真はサーバーなど外部へ送信されません\\A ✔︎ 写真を再選択する時は下のリセットボタン";
    white-space: pre;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-family: "Hannari Mincho";
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    line-height: 1.618rem;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const ImageSelector = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const url = URL.createObjectURL(acceptedFiles[0]);
    setPreview({ ...preview, originImgPath: url });
  }, []);

  const { preview, setPreview } = usePreviewState();
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section {...getRootProps()} css={sectionStyle}>
      <input {...getInputProps()} />
    </section>
  );
};
