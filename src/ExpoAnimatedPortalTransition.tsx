import { requireNativeView } from "expo";
import * as React from "react";
import { Dimensions } from "react-native";

import { ExpoAnimatedPortalTransitionProps } from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<ExpoAnimatedPortalTransitionProps> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalTransition");

export function ExpoAnimatedPortalTransitionPrimitive(
  props: ExpoAnimatedPortalTransitionProps
) {
  return <NativeView {...props} />;
}

export function ExpoAnimatedPortalTransition(
  props: ExpoAnimatedPortalTransitionProps
) {
  const { width } = Dimensions.get("window");
  return (
    // <Host style={{ width }}>
      <ExpoAnimatedPortalTransitionPrimitive {...props} />
    // </Host>
  );
}
