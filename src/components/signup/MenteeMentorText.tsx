import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../Themed";

export default function MenteeMentorText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mentee, Mentor, or Both?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginLeft: "7.5%",
    marginRight: "auto",
    marginTop: "40%",
    width: "90%",
  },
  text: {
    fontFamily: "roboto-bold",
    fontSize: 44,
    color: "#403D3D",
    lineHeight: 46.5,
    height: 130,
    textAlign: "left",
  },
});
