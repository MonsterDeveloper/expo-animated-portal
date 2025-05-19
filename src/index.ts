// Reexport the native module. On web, it will be resolved to ExpoAnimatedPortalModule.web.ts
// and on native platforms to ExpoAnimatedPortalModule.ts
export { default } from "./ExpoAnimatedPortalModule";
export {
  ExpoAnimatedPortalContainer,
  ExpoAnimatedPortalContainerPrimitive,
} from "./ExpoAnimatedPortalContainer";
export * from "./ExpoAnimatedPortal.types";
