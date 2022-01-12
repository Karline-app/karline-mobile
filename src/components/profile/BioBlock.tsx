import React from "react";
import { StyleSheet, Platform } from "react-native";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import { View, Text } from "../Themed";

//https://blog.logrocket.com/applying-box-shadows-in-react-native/

const aboutExample =
  "Cornell is a privately endowed research university and a partner of the State University of New York. As the federal land-grant institution in New York State, we have a responsibility—unique within the Ivy League—to make contributions in all fields of knowledge in a manner that prioritizes public engagement to help improve the quality of life in our state, the nation, the world.";

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
    // shadowProp: {
    //   shadowColor: "#171717",
    //   shadowOffset: { width: 1, height: 1 },
    //   shadowOpacity: 0.08,
    //   shadowRadius: 8,
    // },
  });
}

export default function BioBlock() {
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
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(1, 1, "#171717", 0.08, 8, 4, "#171717");

  return (
    <View style={[styles.container, styles.boxShadow]}>
      <Text style={styles.header}>Bio</Text>
      <Text style={styles.text}>{aboutExample}</Text>
    </View>
  );
}
