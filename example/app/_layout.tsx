import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as React from "react";

export default function RootLayout() {
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
