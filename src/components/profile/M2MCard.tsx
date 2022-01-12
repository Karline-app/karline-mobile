import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Image } from "react-native";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import PupilButton from "../PupilButton";
import { View, Text } from "../Themed";

//for now, not sure if api will be used to get university icons
export class Profile {
  name: string;
  mentor: boolean;
  mentee: boolean;
  pfp: number;
  education: string;
  work: string;
  tags: string[];
  educationDetails: {
    university: string;
    degree: string;
    universityIcon: string;
    attendance: string;
  };
  constructor(
    name: string,
    mentor: boolean,
    mentee: boolean,
    pfp: number,
    education: string,
    work: string,
    tags: string[],
    educationDetails: {
      university: string;
      degree: string;
      universityIcon: string;
      attendance: string;
    }
  ) {
    this.name = name;
    this.mentor = mentor;
    this.mentee = mentee;
    this.pfp = pfp;
    this.education = education;
    this.work = work;
    this.tags = tags;
    this.educationDetails = educationDetails;
  }
}

function TagButton(props: { key: string; tag: string; scheme: ColorScheme }) {
  const educationTags = ["Undergrad", "Graduate"];
  const icons: { [key: string]: any } = {
    Math: <Ionicons name="calculator" size={15} color={props.scheme.primary} />,
    Technology: (
      <MaterialCommunityIcons
        name="monitor"
        size={15}
        color={props.scheme.primary}
      />
    ),
  };
  let buttonContent;
  if (educationTags.indexOf(props.tag) !== -1) {
    buttonContent = (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "roboto-medium",
            fontSize: 11,
            marginRight: 5,
            color: props.scheme.primary,
          }}
        >
          {props.tag}
        </Text>
        <AntDesign name="arrowright" size={12} color={props.scheme.primary} />
      </View>
    );
  } else {
    let icon = null;
    if (props.tag in icons) {
      icon = icons[props.tag];
    }
    buttonContent = (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          marginHorizontal: 15,
        }}
      >
        {icon}
        <Text
          style={{
            fontFamily: "roboto-medium",
            fontSize: 11,
            marginLeft: 5,
            color: props.scheme.primary,
          }}
        >
          {props.tag}
        </Text>
      </View>
    );
  }
  return (
    <PupilButton
      content={buttonContent}
      onPress={() => null}
      style={{
        height: 24,
        marginLeft: 2.5,
        marginRight: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
      }}
    />
  );
}

type M2MCardProps = {
  profile: Profile;
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

function makeStyles(scheme: ColorScheme, propsStyle: M2MCardProps["style"]) {
  return StyleSheet.create({
    container: {
      borderRadius: 15,
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
    pfp: {
      width: "100%",
      aspectRatio: 1.1,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    mentorMenteeText: {
      color: "#55439C",
      fontFamily: "roboto-bold",
      fontSize: 11,
      marginLeft: 15,
      marginTop: 15,
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
      marginLeft: 15,
      marginTop: 10,
    },
    connectButton: {
      backgroundColor: scheme.primary,
      borderColor: scheme.primary,
      height: 35,
      marginLeft: "auto",
      marginRight: 15,
      marginTop: 15,
    },
    subtext: {
      marginLeft: 5,
      fontFamily: "roboto",
      fontSize: 14,
      color: "#403D3D",
      opacity: 0.75,
    },
    tagScrollView: {
      marginTop: "auto",
      marginBottom: 10,
      marginLeft: 5,
      paddingRight: 10,
    },
    educationHeader: {
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "bold",
      fontFamily: "roboto",
      color: "#35393A",
    },
    educationUniversity: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: "roboto",
      color: "#35393A",
    },
    educationAttendance: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: "roboto",
      color: "#979797",
    },
    educationUniversityIcon: {
      width: 64,
      height: 64,
      marginRight: 8,
    },
    educationCard: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 36,
      marginTop: 7,
    },
  });
}

export default function M2MCard(props: M2MCardProps) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme, props.style);
  let mentorMenteeText;
  if (props.profile.mentor && props.profile.mentee) {
    mentorMenteeText = "MENTOR  \u2022  MENTEE";
  } else if (props.profile.mentor) {
    mentorMenteeText = "MENTOR";
  } else {
    mentorMenteeText = "MENTEE";
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.profile.pfp}
        resizeMode="cover"
        imageStyle={styles.pfp}
        style={styles.pfp}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={styles.tagScrollView}
        >
          {props.profile.tags.map((tag) => {
            return <TagButton key={tag} tag={tag} scheme={scheme} />;
          })}
        </ScrollView>
      </ImageBackground>
      <Text style={styles.mentorMenteeText}>{mentorMenteeText}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.nameText}>{props.profile.name}</Text>
          <View style={[styles.row, { alignItems: "center", marginLeft: 15 }]}>
            <Ionicons name="school-outline" size={20} color="#403845" />
            <Text style={styles.subtext}>{props.profile.education}</Text>
          </View>
          <View style={[styles.row, { alignItems: "center", marginLeft: 15 }]}>
            <SimpleLineIcons name="briefcase" size={18} color="#403845" />
            <Text style={styles.subtext}>{props.profile.work}</Text>
          </View>
        </View>
        <PupilButton
          content="Connect"
          textColor="white"
          onPress={() => null}
          style={styles.connectButton}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 15,
          opacity: 0.25,
          borderBottomColor: "#E5E5E5",
          borderWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.educationCard}>
        <View>
          <Image
            style={styles.educationUniversityIcon}
            source={{ uri: props.profile.educationDetails.universityIcon }}
          />
        </View>
        <View>
          <Text style={styles.educationHeader}>
            {props.profile.educationDetails.degree}
          </Text>
          <Text style={styles.educationUniversity}>
            {props.profile.educationDetails.university}
          </Text>
          <Text style={styles.educationAttendance}>
            {props.profile.educationDetails.attendance}
          </Text>
        </View>
      </View>
    </View>
  );
}
