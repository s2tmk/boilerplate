import { css } from "@emotion/react";
import { usePreviewState } from "hooks/usePreviewState";
import { PreviewState } from "interface/PreviewState";
import { useEffect } from "react";

const containerStyle = (preview: PreviewState) => css`
  display: ${preview.artifactImgPath ? "fixed" : "none"};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;

  a {
    position: absolute;
    top: 2%;
    right: 8%;
    color: white;
    font-family: "Aoharu Marker";
    font-size: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Artifact = () => {
  const { preview, setPreview } = usePreviewState();

  // useEffect(() => {
  //   document.addEventListener(
  //     "wheel",
  //     (e: Event) => {
  //       e.preventDefault();
  //     },
  //     { passive: false }
  //   );
  //   document.addEventListener(
  //     "touchmove",
  //     (e: Event) => {
  //       e.preventDefault();
  //     },
  //     { passive: false }
  //   );

  //   return () => {
  //     document.removeEventListener("wheel", (e: Event) => {
  //       e.preventDefault();
  //     });
  //     document.removeEventListener("touchmove", (e: Event) => {
  //       e.preventDefault();
  //     });
  //   };
  // }, []);

  const onClose = () => {
    setPreview({ ...preview, artifactImgPath: "" });
  };

  return (
    <div css={containerStyle(preview)}>
      <a onClick={onClose}>x</a>
      <img src={preview.artifactImgPath} />
    </div>
  );
};
