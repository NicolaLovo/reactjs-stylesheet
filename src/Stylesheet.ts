import {
  AbsoluteFillStyle,
  CSSProperties,
  StylesheetArray,
  Colors,
  ThemeFunction,
} from "./types";

class Stylesheet {
  /**
   * Creates a style from the given object
   * @example
   * ```
   *	import Stylesheet from "reactjs-stylesheet";
   *	const styles = Stylesheet.create({
   *		container: {
   *			backgroundColor: "#81D4FA",
   *			color: "#263238",
   *			height: "100px",
   *		},
   *		button: {
   *			backgroundColor: "#039BE5",
   *			borderRadius: "5px",
   *			cursor: "pointer",
   *		},
   *		textDiv: {
   *			backgroundColor: "#64B5F6",
   *			width: "180px",
   *		},
   *	});
   * ```
   */
  public static create(styleData: CSSProperties): CSSProperties {
    return styleData;
  }

  /**
   * Create a dynamic stylesheet, that uses the given colors object to create the styles.
   * The colors object will be passed to the theme function provided as the second parameter of the function.
   * @example
   * ```
   *	//basic usage inside a component
   *	import React, { useState } from "react";
   *	import Stylesheet from "reactjs-stylesheet";
   *	const themes: {
   *		[themeName: string]: {
   *			[key: string]: string;
   *		};
   *	} = {
   *		light: {
   *			primary: "#E3F2FD",
   *			secondary: "#64B5F6",
   *		},
   *		dark: {
   *			primary: "#ECEFF1",
   *			secondary: "#90A4AE",
   *		},
   *	};
   *	const MyComponent = () => {
   *		const [theme, setTheme] = useState("light");
   *		const styles = Stylesheet.createWithTheme(themes[theme], (colors) => {
   *			return {
   *				container: {
   *					backgroundColor: colors.background,
   *					color: colors.textColor,
   *				},
   *				button: {
   *					backgroundColor: colors.touchable,
   *				},
   *				text: {
   *					backgroundColor: colors.secondary,
   *					color: colors.textColor,
   *				},
   *			};
   *		});
   *		return <div style={styles.container}>myComponent</div>;
   *	};
   *	```
   * @example
   * ```
   * // Advanced use in a separate style module:
   * // in styles.ts(or.js) file:
   * import Stylesheet from "reactjs-stylesheet";
   *	import { Colors } from "reactjs-stylesheet/lib/types";
   * const getStyles = (colors: Colors) => {
   *  //return the styles you want to use
   *  return Stylesheet.createWithTheme(colors, (colors) => {
   *      return {
   *			container: {
   *         backgroundColor: colors.background,
   *      		color: colors.textColor,
   *			},
   *		    button: {
   *		    	backgroundColor: colors.touchable,
   *	  	  },
   *	  	  text: {
   *	  	  	backgroundColor: colors.secondary,
   *  		  	color: colors.textColor,
   * 		},
   *		};
   * })};
   * export default getStyles;
   * //in index.ts (or .js)
   * import React, { useState } from "react";
   *	import getStyles from "./styles";
   *	const themes: {
   *		[themeName: string]: {
   *			[key: string]: string;
   *		};
   *	} = {
   *		light: {
   *			primary: "#E3F2FD",
   *			secondary: "#64B5F6",
   *		},
   *		dark: {
   *			primary: "#ECEFF1",
   *			secondary: "#90A4AE",
   *		},
   *	};
   *	const MyComponent = () => {
   *		const [theme, setTheme] = useState("light");
   *		const styles = getStyles(themes[theme]);
   *		return <div style={styles.container}>myComponent</div>;
   *	};
   *	export default MyComponent;
   * ```
   */
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
