import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAXdTjxX3DFhOjvYRG3xe7R46I67yjPrklbZi9A8qG8nfKatfDMD_IGs1Z7QEx5WUHaUGadb3MdR2Hbh2Lw90Md0Rs8NFyUISpYL8rpxzdzW86tGw82fli"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>GloveCrafter</Typography>
        <Typography color={medium}>glovecrafters.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Unveil your pathway to peak performance and unparalleled protection, ensuring your fists exude power and shine like beacons in the ring
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
