import * as AnimatedPortal from "expo-animated-portal";
import React, { useState } from "react";
import {
  View,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function IndexScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <AnimatedPortal.Root
          portalId="testExpoTransition"
          isActive={isModalVisible}
          style={{ width: 150, height: 150 }}
        >
          <AnimatedPortal.Transition>
            <ColoredBox />
          </AnimatedPortal.Transition>

          <AnimatedPortal.Source>
            <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
              <ColoredBox />
            </Pressable>
          </AnimatedPortal.Source>

          <AnimatedPortal.Sheet
            isOpened={isModalVisible}
            onIsOpenedChange={setIsModalVisible}
            style={{ width, height }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 100,
              }}
            >
              <AnimatedPortal.Destination>
                <ColoredBox size={300} />
              </AnimatedPortal.Destination>
            </View>
          </AnimatedPortal.Sheet>
        </AnimatedPortal.Root>
      </View>
    </SafeAreaView>
  );
}

function ColoredBox({ size = 150 }: { size?: number }) {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: "#EF445F",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
});
