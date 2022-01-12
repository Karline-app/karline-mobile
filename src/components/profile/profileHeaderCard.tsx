import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { Divider } from "react-native-elements/dist/divider/Divider";

import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";
import PupilButton from "../PupilButton";
import { View, Text } from "../Themed";

//need to work on follower count
export class Profile {
  name: string;
  organization: boolean;
  organizationDesc: string;
  mentor: boolean;
  mentee: boolean;
  pfp: number;
  header: number;
  education: string;
  work: string;
  connectionsOrFollowers: number;
  location: string;
  tags: string[];
  constructor(
    name: string,
    organization: boolean,
    organizationDesc: string,
    mentor: boolean,
    mentee: boolean,
    pfp: number,
    header: number,
    education: string,
    work: string,
    connectionsOrFollowers: number,
    location: string,
    tags: string[]
  ) {
    this.name = name;
    this.organization = organization;
    this.organizationDesc = organizationDesc;
    this.mentor = mentor;
    this.mentee = mentee;
    this.pfp = pfp;
    this.header = header;
    this.education = education;
    this.work = work;
    this.connectionsOrFollowers = connectionsOrFollowers;
    this.location = location;
    this.tags = tags;
  }
}

type profileHeaderCardProps = {
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

function makeStyles(
  scheme: ColorScheme,
  propsStyle: profileHeaderCardProps["style"]
) {
  return StyleSheet.create({
    container: {
      borderRadius: 30,
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
    header: {
      width: "100%",
      height: 133,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    mentorMenteeText: {
      color: "#55439C",
      fontFamily: "roboto-bold",
      fontSize: 11,
      marginLeft: 22,
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
      marginLeft: 22,
      lineHeight: 32,
    },
    connectButton: {
      backgroundColor: "white",
      borderColor: scheme.primary,
      height: 35,
      marginLeft: "auto",
      marginRight: 15,
      marginTop: 15,
    },
    subtext: {
      fontFamily: "roboto",
      fontSize: 14,
      color: "#403D3D",
    },
    behind: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    front: {
      position: "absolute",
      backgroundColor: "transparent",
      paddingTop: 100,
    },
    tagScrollView: {
      marginTop: "auto",
      marginBottom: 10,
      marginLeft: 5,
      paddingRight: 10,
    },
  });
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

//https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export default function ProfileHeader(props: profileHeaderCardProps) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme, props.style);
  let mentorMenteeText = "";
  if (props.profile.mentor && props.profile.mentee) {
    mentorMenteeText = "MENTOR  \u2022  MENTEE";
  } else if (props.profile.mentor) {
    mentorMenteeText = "MENTOR";
  } else {
    mentorMenteeText = "MENTEE";
  }
  return (
    <View style={styles.container}>
      <View style={styles.behind}>
        <ImageBackground
          source={props.profile.header}
          resizeMode="cover"
          imageStyle={styles.header}
          style={styles.header}
        />
      </View>
      <View style={styles.front}>
        <View
          style={[
            styles.row,
            { paddingLeft: 24, backgroundColor: "transparent" },
          ]}
        >
          <View style={styles.column}>
            <Avatar rounded source={props.profile.pfp} size={70} />
          </View>
          <View
            style={
              (styles.column,
              { paddingLeft: 80, backgroundColor: "transparent" })
            }
          >
            <PupilButton
              content={
                <Entypo
                  name="dots-three-horizontal"
                  size={28}
                  color="#7A60E4"
                />
              }
              textColor="#7A60E4"
              onPress={() => null}
              style={styles.connectButton}
            />
          </View>
          <View style={styles.column}>
            <PupilButton
              content={props.profile.organization ? "Follow" : "Connect"}
              textColor="#7A60E4"
              onPress={() => null}
              style={styles.connectButton}
            />
          </View>
        </View>
        {!props.profile.organization ? (
          <Text style={styles.mentorMenteeText}>{mentorMenteeText}</Text>
        ) : null}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.nameText}>
              {props.profile.name + " "}
              {props.profile.organization ? (
                <AntDesign name="checkcircle" size={20} color="#2395FF" />
              ) : (
                ""
              )}
            </Text>
            {!props.profile.organization ? (
              <>
                <View
                  style={[styles.row, { alignItems: "center", marginLeft: 22 }]}
                >
                  <Text style={styles.subtext}>{props.profile.education}</Text>
                </View>
                <View
                  style={[styles.row, { alignItems: "center", marginLeft: 22 }]}
                >
                  <Text style={styles.subtext}>{props.profile.work}</Text>
                </View>
                <View
                  style={[
                    styles.row,
                    { alignItems: "center", marginLeft: 22, paddingTop: 16 },
                  ]}
                >
                  <Ionicons name="location-outline" size={16} color="black" />
                  <Text style={styles.subtext}>
                    {props.profile.location} ·{" "}
                    {nFormatter(props.profile.connectionsOrFollowers, 1)}{" "}
                    Connections
                  </Text>
                </View>
              </>
            ) : null}
            {props.profile.organization ? (
              <>
                <View
                  style={[styles.row, { alignItems: "center", marginLeft: 22 }]}
                >
                  <Text style={styles.subtext}>
                    {props.profile.organizationDesc}
                  </Text>
                </View>
                <View
                  style={[styles.row, { alignItems: "center", marginLeft: 22 }]}
                >
                  <Text style={styles.subtext}>
                    <Text style={{ fontWeight: "bold" }}>
                      {nFormatter(props.profile.connectionsOrFollowers, 1)}{" "}
                      Followers{" "}
                    </Text>{" "}
                    · {props.profile.location}
                  </Text>
                </View>
              </>
            ) : null}
          </View>
        </View>
        {props.profile.organization ? null : (
          <View>
            <Divider />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: "100%", paddingTop: 10 }}
              contentContainerStyle={styles.tagScrollView}
            >
              {props.profile.tags.map((tag) => {
                return <TagButton key={tag} tag={tag} scheme={scheme} />;
              })}
            </ScrollView>
            <Divider />
          </View>
        )}
      </View>
    </View>
  );
}
