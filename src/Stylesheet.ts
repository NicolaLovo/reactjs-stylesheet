import { ThemeFunction } from "./types";
import {
  AbsoluteFillStyle,
  CSSProperties,
  StylesheetArray,
  Colors,
} from "./types";

const isStylesheetArray = (styles: any): styles is StylesheetArray =>
  Array.isArray(styles);

class Stylesheet {
  /**
   * Creates a style from the given object
   */
  public static create(styleData: CSSProperties): CSSProperties {
    return styleData;
  }

  public static createWithTheme(
    colors: Colors,
    themeFunction: ThemeFunction
  ): CSSProperties {
    return themeFunction(colors);
  }

  /**
   * Flattens an array of style objects into one single object.
   * The properties of the resulting object will be the union of the properties of the objects in the array.
   */
  public static flatten(style: StylesheetArray): React.CSSProperties {
    let newStyles: React.CSSProperties = {};
    for (let s of style) {
      if (s) newStyles = { ...newStyles, ...s };
    }
    return newStyles;
  }

  /**
   * Composes an array of styles into one style array.
   * The resulting style array will only contain truthy styles. (e.g. not falsy values like null or undefined)
   */
  public static compose(
    style: StylesheetArray | React.CSSProperties
  ): StylesheetArray {
    if (isStylesheetArray(style)) {
      let newStylesArray: StylesheetArray = [];
      for (let s of style) {
        if (s) newStylesArray.push(s);
      }
      return newStylesArray;
    }
    return [style];
  }

  /**
   * A common pattern is to create overlays with position absolute and zero positioning.
   * This is a convenience method to create such an overlay and avoid code repetition.
   */
  public static absoluteFill: AbsoluteFillStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };
}
export default Stylesheet;
