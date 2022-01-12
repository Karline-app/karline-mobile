import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import { View, Text } from "../Themed";

type ExperienceInstance = {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date;
  isPresentRole: boolean;
};

export class Experience {
  userExperiences: ExperienceInstance[];
  constructor(userExperiences: ExperienceInstance[]) {
    this.userExperiences = userExperiences;
  }
}

type ExperienceBlockProps = {
  experience: Experience;
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
  propsStyle: ExperienceBlockProps["style"]
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

export default function ExperienceBlock(props: ExperienceBlockProps) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme, props.style);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactHeader}>Experience</Text>
      </View>

      <View>
        {props.experience.userExperiences.map((x) => (
          <>
            <View style={[styles.row, { paddingLeft: 20, paddingBottom: 18 }]}>
              <View style={styles.column}>
                <MaterialIcons name="work-outline" size={24} color="black" />
              </View>
              <View style={(styles.column, { paddingLeft: 20 })}>
                <Text style={styles.textHeader}>{x.role}</Text>
                <Text>{x.company}</Text>
                {/* <Text>{JSON.parse(JSON.stringify(x.startDate))}</Text> */}
              </View>
            </View>

            <View style={{ alignItems: "center", paddingBottom: 16 }}>
              <Divider style={{ width: 298 }} />
            </View>
          </>
        ))}
      </View>
    </View>
  );
}
