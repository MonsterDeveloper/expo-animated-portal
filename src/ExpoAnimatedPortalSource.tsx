import { requireNativeView } from "expo";
import * as React from "react";

import {
  ExpoAnimatedPortalSourceProps,
  useAnimatedPortalContext,
} from "./ExpoAnimatedPortal.types";

const NativeView: React.ComponentType<
  ExpoAnimatedPortalSourceProps & { portalID: string }
> = requireNativeView("ExpoAnimatedPortal", "ExpoAnimatedPortalSource");

/**
 * A view that is used as a source for the transition.
 */
export function ExpoAnimatedPortalSource(props: ExpoAnimatedPortalSourceProps) {
  const { portalId } = useAnimatedPortalContext();

  return <NativeView portalID={portalId} {...props} />;
}
