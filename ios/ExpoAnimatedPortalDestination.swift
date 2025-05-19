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
        Children().border(.orange, width: 2)
            .portalDestination(id: props.portalID)
    }
}
