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
    // <View style={{flex: 1}}>
      <View
        style={{
          height: 150,
          width: 150,
          // backgroundColor: "#EF445F",
          // opacity: 0.5,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "green",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        <Text style={{ color: "black" }}>{label}</Text>
      </View>
      // </View>
  );
}

export default function IndexScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {alignItems: "center", justifyContent: "center"}]}>
        
          <Text>isModalVisible: {String(isModalVisible)}</Text>
          <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text>Press me</Text>
          </Pressable>

          <ExpoAnimatedPortalContainer
          // isActive={isModalVisible}
          // portalId="testExpoTransition"
        style={{width: 150, height: 150}}
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
              // style={{ flex: 1}}
            >
              <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "red"}}>
                <Text>This is a sheet</Text>
                <ExpoAnimatedPortalDestination portalID="testExpoTransition">
                  <ColoredBox label="Destination" />
                </ExpoAnimatedPortalDestination>
              </View>
             
            </ExpoAnimatedPortalSheet>
          </ExpoAnimatedPortalContainer>
      </View>
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
