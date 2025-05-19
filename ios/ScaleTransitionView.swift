import SwiftUI

let transitionDuration: TimeInterval = 0.4

let scaleAnimation = Animation.smooth(
    duration: transitionDuration,
    extraBounce: 0.25
)

let bounceAnimation = Animation.smooth(
    duration: transitionDuration + 0.12,
    extraBounce: 0.55
)

struct ScaleTransitionView<Content: View>: View {
    @EnvironmentObject private var portalModel: CrossModel
    let id: String
    @ViewBuilder let content: () -> Content

    @State private var scale: CGFloat = 1

    var body: some View {
        // Check whether this portal is animating
        let isActive = portalModel.info
            .first(where: { $0.infoID == id })?
            .animateView ?? false

        content()
            .scaleEffect(scale)
            .onAppear { scale = 1 }
            .onChangeCompat(of: isActive) { newValue in
                if newValue {
                    // 1) Scale up
                    withAnimation(scaleAnimation) {
                        scale = 1.15
                    }
                    // 2) Bounce back
                    DispatchQueue.main.asyncAfter(
                        deadline: .now() + (transitionDuration / 2) - 0.1
                    ) {
                        withAnimation(bounceAnimation) {
                            scale = 1
                        }
                    }
                } else {
                    // Reset on deactivate
                    withAnimation { scale = 1 }
                }
            }
    }
}
