"use client";

import { Globe, TG, VK, HSELogo, Max } from "@/shared/assets";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { externalLinks, routes } from "@/shared/config";
import {
  SButton,
  SButtonsSection,
  SHeader,
  SLogoWrapper,
} from "./header.styles";
import { ButtonLink } from "@/shared/ui";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { useDevice } from "@/shared/hooks";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === routes.HOME_PAGE;
  const { isMobile } = useDevice();

  const handleBackButtonClick: MouseEventHandler<HTMLElement> = (e) => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(routes.HOME_PAGE);
  };

  return (
    <SHeader>
      <SLogoWrapper>
        {!isMobile && (
          <Link href={routes.HOME_PAGE}>
            <Image alt={"hse logo"} src={HSELogo.src} width={86} height={86} />
          </Link>
        )}

        {!isHomePage && (
          <SButton onClick={handleBackButtonClick}>НАЗАД</SButton>
        )}
      </SLogoWrapper>
      <SButtonsSection>
        <ButtonLink href={externalLinks.MAX_LINK} icon={<Max />} />
        <ButtonLink href={externalLinks.HSE_LINK} icon={<Globe />} />
        <ButtonLink href={externalLinks.TG_LINK} icon={<TG />} />
        <ButtonLink href={externalLinks.VK_LINK} icon={<VK />} />
      </SButtonsSection>
    </SHeader>
  );
};
