import { requireNativeView } from "expo";
import * as React from "react";

import { ExpoAnimatedPortalViewProps } from "./ExpoAnimatedPortal.types";

const NativeView: React.ComponentType<ExpoAnimatedPortalViewProps> =
  requireNativeView("ExpoAnimatedPortal");

export default function ExpoAnimatedPortalView(
  props: ExpoAnimatedPortalViewProps
) {
  return <NativeView {...props} />;
}
