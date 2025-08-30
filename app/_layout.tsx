import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Allow all orientations
    ScreenOrientation.unlockAsync();
  }, []);
  return <Stack />;
}
