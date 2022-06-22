import { PreviewState } from "interface/PreviewState";
import { atom, useRecoilState } from "recoil";

export const initialPreviewState: PreviewState = {
  originImgPath: "",
  artifactImgPath: "",
  message: "",
  fontFamily: "Luscious Script",
  color: "black",
};

const previewState = atom<PreviewState>({
  key: "appPreviewState",
  default: initialPreviewState,
});

export const usePreviewState = () => {
  const [preview, setPreview] = useRecoilState(previewState);

  return { preview, setPreview };
};
