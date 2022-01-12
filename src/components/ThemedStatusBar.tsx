import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { View } from "./Themed";

export default function ThemedStatusBar(props: {
  contentStyle: "dark" | "light";
}) {
  return (
    <View style={styles.statusBar}>
      <StatusBar
        translucent
        barStyle={
          props.contentStyle === "light" ? "light-content" : "dark-content"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
});
