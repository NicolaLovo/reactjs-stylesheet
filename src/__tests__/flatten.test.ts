import Stylesheet from "../Stylesheet";

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

const { resultingStyle } = Stylesheet.create({
	resultingStyle: {
		display: "flex",
		flexDirection: "row",
		color: "blue",
		width: 20,
		height: 100,
	},
});

test("Stylesheet.flatten", () => {
	expect(Stylesheet.flatten([styles.style1, styles.style2])).toStrictEqual(
		resultingStyle
	);
});
