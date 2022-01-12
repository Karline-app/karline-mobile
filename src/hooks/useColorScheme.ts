import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

export interface ColorScheme {
  primary: string;
  secondary: string;
  type: NonNullable<ColorSchemeName>;
}

const useColorScheme = (): ColorScheme => {
  const colorTheme = _useColorScheme() as ColorScheme["type"];

  return {
    primary: "#7a60e4",
    secondary: "#ffffff",
    type: colorTheme,
  };
};

export default useColorScheme;
