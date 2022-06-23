import { css } from "@emotion/react";
import { usePreviewState } from "hooks/usePreviewState";
import { PreviewState } from "interface/PreviewState";

const checkStyle = css`
  content: "x";
  font-family: "Aoharu Marker";
  font-size: 4rem;
  width: 100%;
  top: -2rem;
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
`;

const sectionStyle = (preview: PreviewState) => css`
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

  #select-black {
    position: relative;
    &::after {
      display: ${preview.color === "black" ? "inline" : "none"};
      ${checkStyle}
    }
  }

  #select-white {
    color: white;
    text-shadow: 0 0 0.2rem black;
    position: relative;
    &::after {
      text-shadow: 0 0 0 transparent;
      display: ${preview.color === "white" ? "inline" : "none"};
      ${checkStyle}
    }
  }
`;

export const FontColorSwitch = () => {
  const { preview, setPreview } = usePreviewState();

  const onClick = (color: "black" | "white") => {
    setPreview({ ...preview, color });
  };

  return (
    <section css={sectionStyle(preview)}>
      <p>どっちの色が映える？</p>
      <div className="selector">
        <a onClick={() => onClick("black")} id="select-black">
          Black
        </a>
        <a onClick={() => onClick("white")} id="select-white">
          White
        </a>
      </div>
    </section>
  );
};
