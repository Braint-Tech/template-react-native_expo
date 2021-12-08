const white = "#FEFEFE";
const black = "#020202";
const primary = "#3F71CE";
const secondary = "#2B303A";

export default {
  // Basic colors
  white: white,
  black: black,
  primary: primary,
  secondary: secondary,
  alternative: "#519E8A",

  // Gray variants
  darkGray: "#8a8a8a",
  lightGray: "#e6e6e6",
  mediumGray: "#cacaca",

  // Highlight colors
  alert: "#c42021",
  warning: "#f2a541",
  success: "#50723C",

  // Light color scheme
  light: {
    text: black,
    tint: primary,
    background: white,
    tabIconDefault: "#ccc",
    tabIconSelected: primary,
  },

  // Dark color scheme
  dark: {
    text: white,
    tint: secondary,
    background: black,
    tabIconDefault: "#ccc",
    tabIconSelected: white,
  },

  // Shadow color with opacity
  shadow: function shadow(opacity: string = "0.6") {
    return `rgba("100", "100", "100", ${opacity})`;
  },
};
