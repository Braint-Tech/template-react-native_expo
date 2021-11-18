import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

// Built-in type allows null value, but this never happens. This method fixes it.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
