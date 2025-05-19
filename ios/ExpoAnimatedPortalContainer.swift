import ExpoModulesCore
import SwiftUI

final class ExpoAnimatedPortalContainerProps: ExpoSwiftUI.ViewProps {}

struct ExpoAnimatedPortalContainer: ExpoSwiftUI.View {
    @ObservedObject var props: ExpoAnimatedPortalContainerProps
    @State private var showSettingsSheet: Bool = false
    let portalID = "settingsIconTransition" // Static ID

    init(props: ExpoAnimatedPortalContainerProps) {
        self.props = props
    }

    var body: some View {
        PortalContainer { // Step 1
            VStack {
                Image(systemName: "gearshape.fill")
                    .font(.title)
                    .portalSource(id: portalID) // Step 2
                    .onTapGesture { showSettingsSheet = true }
                Children()
                Spacer()
            }
            .sheet(isPresented: $showSettingsSheet) {
                SettingsSheetView(portalID: portalID) // Contains Step 3
            }
            .portalTransition( // Step 4
                id: portalID,
                isActive: $showSettingsSheet,
                animation: .smooth(duration: 0.5),
                animationDuration: 0.5
            ) {
                Image(systemName: "gearshape.fill").font(.title)
            }
        }
    }
}

// Sheet Content View
struct SettingsSheetView: View {
    let portalID: String
    var body: some View {
        Image(systemName: "gearshape.fill")
            .font(.title)
            .portalDestination(id: portalID) // Step 3
    }
}
