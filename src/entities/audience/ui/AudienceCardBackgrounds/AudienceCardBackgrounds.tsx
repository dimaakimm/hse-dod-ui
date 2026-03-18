import {
  SImage,
  SImageWrapperCrowApple,
  SImageWrapperCrowMap,
  SImageWrapperCrowPoints,
  SImageWrapperHeart,
  SImageWrapperLying,
} from "@/entities/audience/ui/AudienceCardBackgrounds/audienceCardBackgrounds.styles";
import {
  CrowApple,
  CrowMap,
  CrowLying,
  CrowPoints,
  Heart,
} from "@/shared/assets";

export const AudienceCardBackgroundCrowApple = () => {
  return (
    <SImageWrapperCrowApple>
      <SImage src={CrowApple.src} alt={"crow apple"} />
    </SImageWrapperCrowApple>
  );
};
export const AudienceCardBackgroundHeart = () => {
  return (
    <SImageWrapperHeart>
      <SImage src={Heart.src} alt={"heart"} />
    </SImageWrapperHeart>
  );
};
export const AudienceCardBackgroundCrowPoints = () => {
  return (
    <SImageWrapperCrowPoints>
      <SImage src={CrowPoints.src} alt={"crow points"} />
    </SImageWrapperCrowPoints>
  );
};
export const AudienceCardBackgroundCrowLying = () => {
  return (
    <SImageWrapperLying>
      <SImage src={CrowLying.src} alt={"crow lying"} />
    </SImageWrapperLying>
  );
};
export const AudienceCardBackgroundCrowMap = () => {
  return (
    <SImageWrapperCrowMap>
      <SImage src={CrowMap.src} alt={"crow map"} />
    </SImageWrapperCrowMap>
  );
};
