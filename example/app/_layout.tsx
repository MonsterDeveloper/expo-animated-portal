import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as React from "react";

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home"}} />
    </Stack>
      <StatusBar style="auto" />
      
    </>
  );
}
