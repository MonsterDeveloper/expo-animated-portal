import { createContext, ReactNode, useContext } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export type ExpoAnimatedPortalContainerProps = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export type ExpoAnimatedPortalSourceProps = {
  children: ReactNode;
};

export type ExpoAnimatedPortalDestinationProps = {
  children: ReactNode;
};

export type ExpoAnimatedPortalTransitionProps = {
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
  style?: StyleProp<ViewStyle>;
};

export type AnimatedPortalContextType = {
  portalId: string;
  isActive: boolean;
};

const AnimatedPortalContext = createContext<AnimatedPortalContextType>({
  portalId: "",
  isActive: false,
});

export const AnimatedPortalContextProvider = AnimatedPortalContext.Provider;

export function useAnimatedPortalContext() {
  const context = useContext(AnimatedPortalContext);

  if (!context) {
    throw new Error(
      "[expo-animated-portal] useAnimatedPortalContext must be used within a AnimatedPortalContextProvider. Did you forget to wrap the portal with <AnimatedPortal.Root>?"
    );
  }

  return context;
}
