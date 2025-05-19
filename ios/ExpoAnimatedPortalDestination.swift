import ExpoModulesCore
import SwiftUI

final class ExpoAnimatedPortalDestinationProps: ExpoSwiftUI.ViewProps {
    @Field var portalID: String
}

struct ExpoAnimatedPortalDestination: ExpoSwiftUI.View {
    @ObservedObject var props: ExpoAnimatedPortalDestinationProps

    init(props: ExpoAnimatedPortalDestinationProps) {
        self.props = props
    }

    var body: some View {
        ScaleTransitionView(id: props.portalID) {
            Children()
        }
        .portalDestination(id: props.portalID)
    }
}
