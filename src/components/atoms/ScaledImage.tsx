import React from "react";
import { ScaledImageParams } from "../../types";
import { Image, Dimensions } from "react-native";

export const ScaledImage: React.FC<ScaledImageParams> = ({
  uri,
  scale,
  width,
  height,
}) => {
  const window = Dimensions.get("window");
  const finalWidth = window.width * scale * 0.01;

  const ratio = finalWidth / width;

  return (
    <Image
      source={typeof uri === "string" ? { uri: uri } : uri}
      style={{ width: finalWidth, height: height * ratio }}
    />
  );
};
