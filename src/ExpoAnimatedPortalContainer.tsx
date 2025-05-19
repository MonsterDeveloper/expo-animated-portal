import { requireNativeView } from "expo";
import * as React from "react";
import { Dimensions } from "react-native";

import { ExpoAnimatedPortalContainerProps } from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

const NativeView: React.ComponentType<ExpoAnimatedPortalContainerProps> =
  requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalContainer");

export function ExpoAnimatedPortalContainerPrimitive(props: ExpoAnimatedPortalContainerProps) {
  return <NativeView  {...props} />;
}

export function ExpoAnimatedPortalContainer(
  props: ExpoAnimatedPortalContainerProps
) {
  const { width } = Dimensions.get("window");
  return (
    <Host onLayoutContent={e => {
      console.log("onLayoutContent from PortalContainer", e.nativeEvent.height, e.nativeEvent.width)
    }}>
      <ExpoAnimatedPortalContainerPrimitive {...props} />
    </Host>
  );
}
