// Reexport the native module. On web, it will be resolved to ExpoAnimatedPortalModule.web.ts
// and on native platforms to ExpoAnimatedPortalModule.ts
export { default } from "./ExpoAnimatedPortalModule";
export { default as ExpoAnimatedPortalView } from "./ExpoAnimatedPortalView";
export * from "./ExpoAnimatedPortal.types";
