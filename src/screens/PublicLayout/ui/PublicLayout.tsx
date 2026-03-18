import {
  SBannerStarsWrapper,
  SImage,
  SPublicLayout,
} from "./publicLayout.styles";
import { StarsBackground } from "@/shared/assets";
import { FC, PropsWithChildren } from "react";

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SPublicLayout>
      <SBannerStarsWrapper>
        <SImage src={StarsBackground.src} fill alt={"stars"} />
      </SBannerStarsWrapper>
      {children}
    </SPublicLayout>
  );
};
