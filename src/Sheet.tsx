// Taken from @expo/ui
// See https://github.com/expo/expo/blob/2640616d0126d1e245bc0a7f7db02fe61d9a78d2/packages/expo-ui/src/swift-ui/BottomSheet/index.tsx

import { requireNativeView } from "expo";
import { NativeSyntheticEvent } from "react-native";

import { ExpoAnimatedPortalSheetProps } from "./ExpoAnimatedPortal.types";

type NativeSheetProps = Omit<
  ExpoAnimatedPortalSheetProps,
  "onIsOpenedChange"
> & {
  onIsOpenedChange: (
    event: NativeSyntheticEvent<{ isOpened: boolean }>
  ) => void;
};

const BottomSheetNativeView: React.ComponentType<NativeSheetProps> =
  requireNativeView("ExpoAnimatedPortal", "Sheet");

export function transformBottomSheetProps(
  props: ExpoAnimatedPortalSheetProps
): NativeSheetProps {
  return {
    ...props,
    onIsOpenedChange: ({ nativeEvent: { isOpened } }) => {
      props?.onIsOpenedChange?.(isOpened);
    },
  };
}

/**
 * `<BottomSheet>` component without a host view.
 * You should use this with a `Host` component in ancestor.
 */
export function ExpoAnimatedPortalSheetPrimitive(
  props: ExpoAnimatedPortalSheetProps
) {
  return <BottomSheetNativeView {...transformBottomSheetProps(props)} />;
}

export function ExpoAnimatedPortalSheet(props: ExpoAnimatedPortalSheetProps) {
  return <ExpoAnimatedPortalSheetPrimitive {...props} />;
}
