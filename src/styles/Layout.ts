import { Dimensions, PixelRatio } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const guidelineBaseWidth = 375;

function dimensions(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
  property: string
) {
  let styles: any = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export const scaleSize = (size: number) => (width / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export function margin(top: number, right: number, bottom?: number, left?: number) {
  return dimensions(top, right, bottom, left, "margin");
}

export function padding(top: number, right: number, bottom?: number, left?: number) {
  return dimensions(top, right, bottom, left, "padding");
}

export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
