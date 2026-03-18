"use client";

import { Globe, TG, VK, HSELogo } from "@/shared/assets";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/shared/config";
import {
  SButton,
  SButtonsSection,
  SHeader,
  SLogoWrapper,
} from "./header.styles";
import { ButtonLink } from "@/shared/ui";
import Image from "next/image";
import { MouseEventHandler } from "react";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === routes.HOME_PAGE;

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
        <Link href={routes.HOME_PAGE}>
          <Image alt={"hse logo"} src={HSELogo.src} width={86} height={86} />
        </Link>

        {!isHomePage && (
          <SButton onClick={handleBackButtonClick}>НАЗАД</SButton>
        )}
      </SLogoWrapper>
      <SButtonsSection>
        <ButtonLink icon={<Globe />} />
        <ButtonLink icon={<TG />} />
        <ButtonLink icon={<VK />} />
      </SButtonsSection>
    </SHeader>
  );
};
