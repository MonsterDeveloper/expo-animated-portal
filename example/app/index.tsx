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
  Dimensions,
} from "react-native";

function ColoredBox({ size = 150 }: { size?: number }) {
  return (
    // <View style={{flex: 1}}>
      <View
        style={{
          height: size,
          width: size,
          backgroundColor: "#EF445F",
          borderRadius: 30,
          // borderWidth: 1,
          // borderColor: "green",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      />
  );
}

export default function IndexScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {alignItems: "center", justifyContent: "center"}]}>
          <ExpoAnimatedPortalContainer
          // isActive={isModalVisible}
          // portalId="testExpoTransition"
        style={{width: 150, height: 150}}
          >
            <ExpoAnimatedPortalTransition
              portalID="testExpoTransition"
              isActive={isModalVisible}
            >
              <ColoredBox />
            </ExpoAnimatedPortalTransition>
            <ExpoAnimatedPortalSource portalID="testExpoTransition">
              <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
                <ColoredBox />
              </Pressable>
            </ExpoAnimatedPortalSource>
           
            <ExpoAnimatedPortalSheet
              isOpened={isModalVisible}
              onIsOpenedChange={setIsModalVisible}
              style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height}}
            >
              <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 150}}>
                <ExpoAnimatedPortalDestination portalID="testExpoTransition">
                  <ColoredBox size={300} />
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
