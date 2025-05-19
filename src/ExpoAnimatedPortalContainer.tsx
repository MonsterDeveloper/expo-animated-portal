import { requireNativeView } from "expo";
import * as React from "react";
import { Dimensions } from "react-native";

import { ExpoAnimatedPortalContainerProps } from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<{ isActive: boolean; portalID: string }> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalContainer");

export function ExpoAnimatedPortalContainerPrimitive({
  portalId,
  isActive,
  ...props
}: ExpoAnimatedPortalContainerProps) {
  return <NativeView isActive={isActive} portalID={portalId} {...props} />;
}

export function ExpoAnimatedPortalContainer(
  props: ExpoAnimatedPortalContainerProps
) {
  const { width } = Dimensions.get("window");
  return (
    <Host matchContents>
      <ExpoAnimatedPortalContainerPrimitive {...props} />
    </Host>
  );
}
