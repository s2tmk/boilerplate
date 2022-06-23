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

  #select-cool {
    position: relative;
    &::after {
      display: ${preview.fontFamily === "Luscious Script" ? "inline" : "none"};
      ${checkStyle}
    }
  }

  #select-cute {
    font-family: "Aoharu Marker";
    letter-spacing: -0.5rem;
    font-size: 1.5rem;
    position: relative;
    &::after {
      display: ${preview.fontFamily === "Aoharu Marker" ? "inline" : "none"};
      ${checkStyle}
    }
  }
`;

export const FontFamilySwitch = () => {
  const { preview, setPreview } = usePreviewState();

  const onClick = (fontFamily: "Aoharu Marker" | "Luscious Script") => {
    setPreview({ ...preview, fontFamily });
  };

  return (
    <section css={sectionStyle(preview)}>
      <p>どっち文字で書こう？</p>
      <div className="selector">
        <a onClick={() => onClick("Luscious Script")} id="select-cool">
          English
        </a>
        <a onClick={() => onClick("Aoharu Marker")} id="select-cute">
          かな・En
        </a>
      </div>
    </section>
  );
};
