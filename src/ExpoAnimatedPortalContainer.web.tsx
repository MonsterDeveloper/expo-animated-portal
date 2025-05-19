import * as React from "react";

import { ExpoAnimatedPortalContainerProps } from "./ExpoAnimatedPortal.types";

export default function ExpoAnimatedPortalContainer({
  children,
}: ExpoAnimatedPortalContainerProps) {
  return <div>{children}</div>;
}
