import { requireNativeView } from "expo";
import * as React from "react";
import { Dimensions } from "react-native";

import { ExpoAnimatedPortalSourceProps } from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<ExpoAnimatedPortalSourceProps> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalSource");

export function ExpoAnimatedPortalSourcePrimitive(
  props: ExpoAnimatedPortalSourceProps
) {
  return <NativeView {...props} />;
}

export function ExpoAnimatedPortalSource(props: ExpoAnimatedPortalSourceProps) {
  const { width } = Dimensions.get("window");
  return (
    <Host matchContents>
      <ExpoAnimatedPortalSourcePrimitive {...props} />
    </Host>
  );
}
