import { requireNativeView } from "expo";
import * as React from "react";
import { Dimensions } from "react-native";

import { ExpoAnimatedPortalDestinationProps } from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<ExpoAnimatedPortalDestinationProps> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalDestination");

export function ExpoAnimatedPortalDestinationPrimitive(
  props: ExpoAnimatedPortalDestinationProps
) {
  return <NativeView {...props} />;
}

export function ExpoAnimatedPortalDestination(
  props: ExpoAnimatedPortalDestinationProps
) {
  const { width } = Dimensions.get("window");
  return (
    <Host matchContents>
      <ExpoAnimatedPortalDestinationPrimitive {...props} />
    </Host>
  );
}
