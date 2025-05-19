import ExpoModulesCore
import SwiftUI

final class ExpoAnimatedPortalContainerProps: ExpoSwiftUI.ViewProps {
  
}

struct ExpoAnimatedPortalContainer: ExpoSwiftUI.View {
  @ObservedObject var props: ExpoAnimatedPortalContainerProps

  init(props: ExpoAnimatedPortalContainerProps) {
    self.props = props
  }

  var body: some View {
    VStack {
      Text("ExpoAnimatedPortal Container")
      Children()
    }
  }
}