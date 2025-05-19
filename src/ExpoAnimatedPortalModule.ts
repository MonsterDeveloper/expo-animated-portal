import { NativeModule, requireNativeModule } from "expo";

import { ExpoAnimatedPortalModuleEvents } from "./ExpoAnimatedPortal.types";

declare class ExpoAnimatedPortalModule extends NativeModule<ExpoAnimatedPortalModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAnimatedPortalModule>(
  "ExpoAnimatedPortal"
);
