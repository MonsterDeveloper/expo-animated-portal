import ExpoModulesCore
import SwiftUI

final class ExpoAnimatedPortalSourceProps: ExpoSwiftUI.ViewProps {
    @Field var portalID: String
}

struct ExpoAnimatedPortalSource: ExpoSwiftUI.View {
    @ObservedObject var props: ExpoAnimatedPortalSourceProps

    init(props: ExpoAnimatedPortalSourceProps) {
        self.props = props
    }

    var body: some View {
        Image(systemName: "gearshape.fill")
            .font(.title)
            .portalSource(id: props.portalID)
    }
}
