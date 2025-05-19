import { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export type ExpoAnimatedPortalContainerProps = {
  style?: StyleProp<ViewStyle>;
  // isActive: boolean;
  // portalId: string;
  children: ReactNode;
};

export type ExpoAnimatedPortalSourceProps = {
  portalID: string;
  children: ReactNode;
};

export type ExpoAnimatedPortalDestinationProps = {
  portalID: string;
  children: ReactNode;
};

export type ExpoAnimatedPortalTransitionProps = {
  portalID: string;
  isActive: boolean;
  children: ReactNode;
};

export type ExpoAnimatedPortalSheetProps = {
  /**
   * The children of the `BottomSheet` component.
   */
  children: any;
  /**
   * Whether the `BottomSheet` is opened.
   */
  isOpened: boolean;
  /**
   * Callback function that is called when the `BottomSheet` is opened.
   */
  onIsOpenedChange: (isOpened: boolean) => void;
};
