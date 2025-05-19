import * as React from 'react';

import { ExpoAnimatedPortalViewProps } from './ExpoAnimatedPortal.types';

export default function ExpoAnimatedPortalView(props: ExpoAnimatedPortalViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
