import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import { View, Text } from "../Themed";

export class Contact {
  linkedin: string;
  email: string;
  constructor(linkedin: string, email: string) {
    this.linkedin = linkedin;
    this.email = email;
  }
}

type ContactBlockProps = {
  contact: Contact;
  style: {
    width?: number | string;
    height?: number | string;
    flex?: number;
    marginTop?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
  };
};

function makeStyles(
  scheme: ColorScheme,
  propsStyle: ContactBlockProps["style"]
) {
  return StyleSheet.create({
    container: {
      borderRadius: 10,
      width: propsStyle.width,
      height: propsStyle.height,
      flex: propsStyle.flex,
      marginTop: propsStyle.marginTop,
      marginLeft: propsStyle.marginLeft,
      marginRight: propsStyle.marginRight,
      marginBottom: propsStyle.marginBottom,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.3,
    },
    contactHeader: {
      fontSize: 12,
      color: "#262626",
      padding: 16,
    },
    textHeader: {
      fontSize: 14,
      color: "#403D3D",
      fontWeight: "bold",
    },
    subtext: {
      fontSize: 12,
      color: "#35393A",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "transparent",
    },
    column: {
      flexDirection: "column",
      backgroundColor: "transparent",
    },
    nameText: {
      color: "#403D3D",
      fontFamily: "roboto-bold",
      fontSize: 24,
      marginLeft: 22,
      lineHeight: 32,
    },
  });
}

export default function ContactBlock(props: ContactBlockProps) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme, props.style);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactHeader}>Contact</Text>
      </View>

      <View>
        <View style={[styles.row, { paddingLeft: 24, paddingBottom: 18 }]}>
          <View style={styles.column}>
            <AntDesign name="linkedin-square" size={34} color="black" />
          </View>
          <View style={(styles.column, { paddingLeft: 44 })}>
            <Text style={styles.textHeader}>Linkedin</Text>
            <Text>{props.contact.linkedin}</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Divider style={{ width: 298 }} />
        </View>

        <View style={[styles.row, { paddingLeft: 24, paddingTop: 18 }]}>
          <View style={styles.column}>
            <MaterialCommunityIcons
              name="email-outline"
              size={34}
              color="black"
            />
          </View>
          <View style={(styles.column, { paddingLeft: 44 })}>
            <Text style={styles.textHeader}>Email</Text>
            <Text>{props.contact.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
