import ExpoAnimatedPortal, {
  ExpoAnimatedPortalContainer,
  ExpoAnimatedPortalDestination,
  ExpoAnimatedPortalSheet,
  ExpoAnimatedPortalSource,
  ExpoAnimatedPortalTransition,
} from "expo-animated-portal";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

function ColoredBox({ label }: { label: string }) {
  return (
    <View>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: "#EF445F",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={{ color: "white" }}>{label}</Text>
      </View>
    </View>
  );
}

export default function IndexScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        {/* <Group name="Constants">
          <Text>{ExpoAnimatedPortal.PI}</Text>
        </Group>
        <Group name="Functions">
          <Text>{ExpoAnimatedPortal.hello()}</Text>
        </Group>
        <Group name="Async functions">
          <Button
            title="Set value"
            onPress={async () => {
              await ExpoAnimatedPortal.setValueAsync("Hello from JS!");
            }}
          />
        </Group> */}
        <Group name="Views">
          <Text>isModalVisible: {String(isModalVisible)}</Text>
          <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text>Press me</Text>
          </Pressable>
          <ExpoAnimatedPortalContainer
          // isActive={isModalVisible}
          // portalId="testExpoTransition"
          >
            <ExpoAnimatedPortalTransition
              portalID="testExpoTransition"
              isActive={isModalVisible}
            >
              <ColoredBox label="Transition" />
            </ExpoAnimatedPortalTransition>
            <ExpoAnimatedPortalSource portalID="testExpoTransition">
              <ColoredBox label="Source" />
            </ExpoAnimatedPortalSource>
            <ExpoAnimatedPortalSheet
              isOpened={isModalVisible}
              onIsOpenedChange={setIsModalVisible}
            >
              <View style={{ flex: 1, height: 500, padding: 20, width: 100 }}>
                <ExpoAnimatedPortalDestination portalID="testExpoTransition">
                  <Text>Destination</Text>
                </ExpoAnimatedPortalDestination>
                <Text>PortalSheet</Text>
              </View>
            </ExpoAnimatedPortalSheet>
          </ExpoAnimatedPortalContainer>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
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
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
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
