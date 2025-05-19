import { registerWebModule, NativeModule } from 'expo';

import { ExpoAnimatedPortalModuleEvents } from './ExpoAnimatedPortal.types';

class ExpoAnimatedPortalModule extends NativeModule<ExpoAnimatedPortalModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAnimatedPortalModule, 'ExpoAnimatedPortalModule');
