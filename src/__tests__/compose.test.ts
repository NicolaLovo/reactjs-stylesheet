import Stylesheet from "../Stylesheet";
import { StylesheetArray } from "../types";

const styles = Stylesheet.create({
	style1: {
		display: "flex",
		flexDirection: "row",
		color: "red",
		width: 100,
	},
	style2: {
		height: 100,
		width: 20,
		color: "blue",
	},
});

const resultingStyle: StylesheetArray = [
	{ color: "red", display: "flex", flexDirection: "row", width: 100 },
	{ color: "blue", height: 100, width: 20 },
];

test("Stylesheet.composeMultiple", () => {
	expect(Stylesheet.compose([styles.style1, styles.style2])).toStrictEqual(
		resultingStyle
	);
});

test("Stylesheet.composeSingle", () => {
	expect(Stylesheet.compose(styles.style1)).toStrictEqual([styles.style1]);
});
