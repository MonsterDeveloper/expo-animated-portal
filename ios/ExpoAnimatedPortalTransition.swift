import ExpoModulesCore
import SwiftUI

final class ExpoAnimatedPortalTransitionProps: ExpoSwiftUI.ViewProps {
    @Field var portalID: String
    @Field var isActive: Bool = false
}

struct ExpoAnimatedPortalTransition: ExpoSwiftUI.View {
    @ObservedObject var props: ExpoAnimatedPortalTransitionProps
    @State private var isActive: Bool

    init(props: ExpoAnimatedPortalTransitionProps) {
        self.props = props
        self._isActive = State(initialValue: props.isActive)
    }

    var body: some View {
        Rectangle().hidden().onChange(of: props.isActive) { newValue in
            isActive = newValue
        }
        .onAppear {
            isActive = props.isActive
        }
        .portalTransition( // Step 4
            id: props.portalID,
            isActive: $isActive,
            animation: .smooth(duration: 0.5),
            animationDuration: 0.5
        ) {
            Image(systemName: "gearshape.fill")
                .font(.title)
        }
    }
}
