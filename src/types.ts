export interface AbsoluteFillStyle {
	position: "absolute";
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

export interface CSSProperties {
	[key: string]: React.CSSProperties;
}

export type Falsy = undefined | null | false;
export type StylesheetArray = Array<React.CSSProperties | Falsy>;

export interface Colors {
	[key: string]: string;
}
export type ThemeFunction = (colors: Colors) => CSSProperties;
