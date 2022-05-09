import Stylesheet from "../Stylesheet";
import { ThemeFunction, Colors } from "../types";

const colors = {
  primary: "red",
  secondary: "blue",
};
const themeFunction: ThemeFunction = (colors: Colors) => ({
  myStyle: {
    color: colors.primary,
  },
});

const expectedStyles = {
  myStyle: {
    color: "red",
  },
};

test("Stylesheet.createWithTheme", () => {
  expect(Stylesheet.createWithTheme(colors, themeFunction)).toStrictEqual(
    expectedStyles
  );
});
