import ExpoAnimatedPortal, {
  ExpoAnimatedPortalContainer,
  ExpoAnimatedPortalSource,
} from "expo-animated-portal";
import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Constants">
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
        </Group>
        <Group name="Views">
          <Text>{String(isActive)}</Text>
          <Pressable onPress={() => setIsActive(!isActive)}>
            <Text>Press me</Text>
          </Pressable>
          <ExpoAnimatedPortalContainer
            portalId="testExpoTransition"
            isActive={isActive}
            style={{ flex: 1, height: 300, backgroundColor: "blue" }}
          >
            <Text>Hello from JS!213</Text>
            <ExpoAnimatedPortalSource portalID="testExpoTransition">
              <Text>Hello from ExpoAnimatedPortalSource</Text>
            </ExpoAnimatedPortalSource>
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

const styles = {
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
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
