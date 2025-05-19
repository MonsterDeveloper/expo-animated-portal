import { requireNativeView } from "expo";
import * as React from "react";

import {
  ExpoAnimatedPortalTransitionProps,
  useAnimatedPortalContext,
} from "./ExpoAnimatedPortal.types";

type NativeProps = ExpoAnimatedPortalTransitionProps & {
  isActive: boolean;
  portalID: string;
};

const NativeView: React.ComponentType<NativeProps> = requireNativeView(
  "ExpoAnimatedPortal",
  "ExpoAnimatedPortalTransition"
);

/**
 * A view containing the overlay which is used to transition the content from source to destination.
 */
export function ExpoAnimatedPortalTransition(
  props: ExpoAnimatedPortalTransitionProps
) {
  const { portalId, isActive } = useAnimatedPortalContext();

  return <NativeView {...props} portalID={portalId} isActive={isActive} />;
}
