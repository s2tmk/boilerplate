import { css } from "@emotion/react";
import { initialPreviewState, usePreviewState } from "hooks/usePreviewState";
import html2canvas from "html2canvas";

const sectionStyle = css`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .selector {
    width: 60%;
  }

  span {
    margin: 0 1rem;
  }

  a {
    display: inline-flex;
    justify-content: center;
    width: 50%;
  }
`;

export const CommitButtons = () => {
  const { preview, setPreview } = usePreviewState();

  const onClickReset = () => {
    setPreview(initialPreviewState);
  };

  const onClickSave = () => {
    html2canvas(document.getElementById("preview"), {
      backgroundColor: null,
    }).then((canvas) => {
      const url = canvas.toDataURL("image/png");
      setPreview({ ...preview, artifactImgPath: url });
    });
  };

  return (
    <section css={sectionStyle}>
      <p>Goodで写真が長押し保存できるように！</p>
      <div className="selector">
        <a onClick={onClickReset} className="destructive">
          Retry
        </a>
        <a onClick={onClickSave}>Good</a>
      </div>
    </section>
  );
};
