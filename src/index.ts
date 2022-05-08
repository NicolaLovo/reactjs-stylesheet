//guide:https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

//npm publish to publish to npm --> DO NOT USE IT
//npm version patch to bump the version

import Stylesheet from "./Stylesheet";
export const Greeter = (name: string) => `Hello ${name}`;
export default Stylesheet;
// Stylesheet.create({
//    greeter: {
//       color: "red"
//    },
// });
