import { requireNativeView } from "expo";
import * as React from "react";

import {
  ExpoAnimatedPortalDestinationProps,
  useAnimatedPortalContext,
} from "./ExpoAnimatedPortal.types";
import { Host } from "./Host";

type NativeProps = ExpoAnimatedPortalDestinationProps & { portalID: string };

const NativeView: React.ComponentType<NativeProps> = requireNativeView(
  "ExpoAnimatedPortal",
  "ExpoAnimatedPortalDestination"
);

export function ExpoAnimatedPortalDestinationPrimitive(props: NativeProps) {
  return <NativeView {...props} />;
}

/**
 * A view that is used as a destination for the transition.
 */
export function ExpoAnimatedPortalDestination(
  props: ExpoAnimatedPortalDestinationProps
) {
  const { portalId } = useAnimatedPortalContext();

  return (
    <Host matchContents>
      <ExpoAnimatedPortalDestinationPrimitive {...props} portalID={portalId} />
    </Host>
  );
}
