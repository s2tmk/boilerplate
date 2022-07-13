import { Header } from "features/Header";
import { Description } from "features/Description";
import { ImageSelector } from "features/ImageSelector";
import { PreviewEditor } from "features/PreviewEditor";
import { usePreviewState } from "hooks/usePreviewState";
import { ImagePreview } from "features/ImagePreview";
import { css } from "@emotion/react";
import { Footer } from "features/Footer";
import { Artifact } from "features/Artifact";

const mainStyle = css`
  width: 100%;
  height: 100%;
`;

const IndexPage = () => {
  const { preview } = usePreviewState();
  const { originImgPath } = preview;
  return (
    <main css={mainStyle}>
      <Header />
      <Description />
      {originImgPath ? <ImagePreview /> : <ImageSelector />}
      <PreviewEditor />
      <Footer />
      <Artifact />
    </main>
  );
};

export default IndexPage;
