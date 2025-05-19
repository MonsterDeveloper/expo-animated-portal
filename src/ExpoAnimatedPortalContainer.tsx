import { requireNativeView } from "expo";
import * as React from "react";

import {
  AnimatedPortalContextProvider,
  AnimatedPortalContextType,
  ExpoAnimatedPortalContainerProps,
} from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<ExpoAnimatedPortalContainerProps> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalContainer");

export function ExpoAnimatedPortalContainerPrimitive(
  props: ExpoAnimatedPortalContainerProps
) {
  return <NativeView {...props} />;
}

export function ExpoAnimatedPortalContainer({
  portalId,
  isActive,
  ...props
}: ExpoAnimatedPortalContainerProps & AnimatedPortalContextType) {
  return (
    <AnimatedPortalContextProvider value={{ portalId, isActive }}>
      <Host>
        <ExpoAnimatedPortalContainerPrimitive {...props} />
      </Host>
    </AnimatedPortalContextProvider>
  );
}
