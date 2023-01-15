import { createTheme } from "@nextui-org/react";
import { colors } from "./colors";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: {
      sans: "Paralucent",
      mono: "Paralucent-text",
    },
    colors: {
      white: colors.white,
      black: colors.black,

      // background
      background: colors.black,
      backgroundAlpha: colors.blackAlpha[100],
      foreground: colors.white,
      backgroundContrast: "$accents0",
      primary: colors.purple,

      // misc
      // textLight: addColorAlpha(grayDark.gray900, 0.2),
      text: colors.white,
      // linkLight: addColorAlpha(blueDark.blue600, 0.2),
      link: "$blue700",
      codeLight: "$cyan50",
      code: "$cyan600",
      selection: "$pink800",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },
});
