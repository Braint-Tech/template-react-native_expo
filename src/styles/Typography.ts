import { scaleFont } from "./Layout";

// FONT FAMILY
export const family_regular = "OpenSans-Regular";
export const family_bold = "OpenSans-Bold";

// FONT WEIGHT
export const weight_regular = "400";
export const weight_bold = "700";

// FONT SIZE
export const size_24 = scaleFont(28);
export const size_18 = scaleFont(18);
export const size_16 = scaleFont(16);
export const size_14 = scaleFont(14);
export const size_12 = scaleFont(12);

// LINE HEIGHT
export const line_height_24 = scaleFont(24);
export const line_height_20 = scaleFont(20);
export const line_height_16 = scaleFont(16);

// FONT STYLE
export const regular = {
  fontFamily: family_regular,
  fontWeight: weight_regular,
};

export const bold = {
  fontFamily: family_bold,
  fontWeight: weight_bold,
};
