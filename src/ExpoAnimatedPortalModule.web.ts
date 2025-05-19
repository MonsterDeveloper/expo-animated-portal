import { registerWebModule, NativeModule } from "expo";

class ExpoAnimatedPortalModule extends NativeModule {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {}
  hello() {
    return "Hello world! 👋";
  }
}

export default registerWebModule(
  ExpoAnimatedPortalModule,
  "ExpoAnimatedPortalModule"
);
