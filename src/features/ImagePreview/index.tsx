import { css } from "@emotion/react";
import { usePreviewState } from "hooks/usePreviewState";
import { PreviewState } from "interface/PreviewState";
import dayjs from "dayjs";

const imageStyle = (preview: PreviewState) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 60vw;
  margin-top: 2rem;
  position: relative;
  background-color: aliceblue;
  img {
    width: 100%;
  }
  &::before {
    content: "${dayjs().format("#MMDD")}";
    color: ${preview.color};
    font-family: ${preview.fontFamily};
    font-size: ${preview.fontFamily === "Luscious Script"
      ? "clamp(0.5rem, 5vw, 50rem)"
      : "clamp(0.2rem, 2vw, 20rem)"};
    display: flex;
    align-items: center;
    position: absolute;
    top: 12.5%;
    left: 10%;
    width: 40%;
    height: 8vw;
    border: 1px solid;
    border-color: ${preview.color} transparent transparent ${preview.color};
    padding-left: 2%;
  }
  &::after {
    content: "iloneer.com";
    color: ${preview.color};
    font-family: ${preview.fontFamily};
    font-size: ${preview.fontFamily === "Luscious Script"
      ? "clamp(0.5rem, 5vw, 50rem)"
      : "clamp(0.2rem, 2vw, 20rem)"};
    display: flex;
    align-items: center;
    justify-content: end;
    position: absolute;
    bottom: 12.5%;
    left: 50%;
    transform: translateX(-100%);
    width: 40%;
    height: 8vw;
    border: 1px solid;
    border-color: transparent ${preview.color} ${preview.color} transparent;
    padding-right: 2%;
  }
`;

const decorationStyle = (preview: PreviewState) => css`
  width: 100%;
  height: 60vw;
  position: absolute;
  top: 0;
  left: 0;
  &::after {
    content: "${preview.message}";
    font-family: "${preview.fontFamily}";
    font-size: ${preview.fontFamily === "Luscious Script"
      ? "clamp(5rem, 20vw, 100rem)"
      : "clamp(2rem, 8vw, 40rem)"};
    letter-spacing: ${preview.fontFamily === "Aoharu Marker" ? "-0.5rem" : 0};
    color: ${preview.color};
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    text-align: center;
  }
`;

export const ImagePreview = () => {
  const { preview } = usePreviewState();
  return (
    <div css={imageStyle(preview)} id="preview">
      <img src={preview.originImgPath} />
      <div css={decorationStyle(preview)} />
    </div>
  );
};
