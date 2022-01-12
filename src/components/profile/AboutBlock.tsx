import React from "react";
import { StyleSheet, Platform } from "react-native";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import { View, Text } from "../Themed";

const aboutExample =
  "Born in Moscow, grew up in Adelphi. I attended the University of Maryland and graduated with a joint B.S. in CS & Math. Co-Founded Google and Alphabet Inc., interested in technology and literacy? Connect with me!";

function makeStyles(scheme: ColorScheme) {
  return StyleSheet.create({
    container: {
      borderRadius: 15,
      backgroundColor: "#ffffff",
      margin: 16,
      // borderColor: "#403D3D",
      // borderWidth: 1,
    },
    text: {
      // fontFamily: "Roboto",
      fontSize: 12,
      lineHeight: 14,
      color: "#262626",
      marginTop: 6,
      marginLeft: 16,
      marginRight: 18,
      marginBottom: 16,
    },
    header: {
      color: "rgba(38, 38, 38, 0.5)",
      fontSize: 12,
      lineHeight: 12,
      marginTop: 8,
      marginLeft: 16,
      marginRight: 18,
    },
  });
}

export default function AboutBlock() {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.bowShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(1, 1, "#171717", 0.08, 8, 4, "#171717");

  return (
    <View style={[styles.container, styles.boxShadow]}>
      <Text style={styles.header}>About</Text>
      <Text style={styles.text}>{aboutExample}</Text>
    </View>
  );
}
