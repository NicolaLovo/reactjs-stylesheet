import Stylesheet from "../Stylesheet";

test("Stylesheet.composeMultiple", () => {
	expect(Stylesheet.absoluteFill).toStrictEqual({
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	});
});
