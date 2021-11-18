const primary = "#3F71CE";
const light = "#F5F5F5";

export default {
  white: "#FFF",
  black: "#091018",
  primary: primary,
  secondary: "#2B303A",
  alternative: "#519E8A",

  light_gray: "#e6e6e6",
  medium_gray: "#cacaca",
  dark_gray: "#8a8a8a",

  success: "#50723C",
  warning: "#f2a541",
  alert: "#c42021",
  light: {
    text: "#000",
    tint: primary,
    background: light,
    tabIconDefault: "#ccc",
    tabIconSelected: primary,
  },
  dark: {
    tint: light,
    text: light,
    background: "#000",
    tabIconDefault: "#ccc",
    tabIconSelected: light,
  },
  shadow: function shadow(opacity: string = "0.6") {
    return `rgba("100", "100", "100", ${opacity})`;
  },
};
