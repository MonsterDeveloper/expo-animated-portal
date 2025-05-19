// Reexport the native module. On web, it will be resolved to ExpoAnimatedPortalModule.web.ts
// and on native platforms to ExpoAnimatedPortalModule.ts
export { default } from "./ExpoAnimatedPortalModule";

export { ExpoAnimatedPortalSheet as Sheet } from "./Sheet";
export { ExpoAnimatedPortalContainer as Root } from "./ExpoAnimatedPortalContainer";
export { ExpoAnimatedPortalSource as Source } from "./ExpoAnimatedPortalSource";
export { ExpoAnimatedPortalDestination as Destination } from "./ExpoAnimatedPortalDestination";
export { ExpoAnimatedPortalTransition as Transition } from "./ExpoAnimatedPortalTransition";

export * from "./ExpoAnimatedPortal.types";
