import React from "react";
// import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { ColorScheme } from "../hooks/useColorScheme";
import { Institution } from "../screens/onboarding/OBFollow";
import PupilButton from "./PupilButton";
import { Text, View } from "./Themed";

type FollowCardProps = {
  institution: Institution;
  scheme: ColorScheme;
  following: string[];
  updateFollowing: any;
  style: {
    height?: number | string;
    width?: number | string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    marginTop?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
  };
};

function makeStyles(props: FollowCardProps) {
  const style = props.style;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      height: style.height,
      width: style.width,
      borderColor: style.borderColor,
      borderRadius: style.borderRadius,
      alignItems: "center",
      backgroundColor: style.backgroundColor,
      borderWidth: 1,
      shadowColor: style.shadowColor,
      shadowOffset: style.shadowOffset,
      shadowOpacity: style.shadowOpacity,
      shadowRadius: style.shadowRadius,
      marginTop: style.marginTop,
      marginLeft: style.marginLeft,
      marginRight: style.marginRight,
      marginBottom: style.marginBottom,
    },
    logo: {
      marginLeft: "5%",
      height: 50,
      width: 50,
    },
    textContainer: {
      flexDirection: "column",
      backgroundColor: "transparent",
      marginLeft: 10,
    },
    name: {
      fontFamily: "roboto-bold",
      fontSize: 14,
      color: "#403D3D",
    },
    type: {
      fontFamily: "roboto",
      fontSize: 12,
      color: "#403D3D",
    },
    followers: {
      fontFamily: "roboto",
      fontSize: 12,
      color: "#7E7E7E",
    },
    followButton: {
      backgroundColor:
        props.following.indexOf(props.institution.name) !== -1
          ? props.scheme.primary
          : "transparent",
      height: 30,
      width: 100,
      fontSize: 14,
      fontFamily: "roboto",
      borderColor: "#7A60E4",
      marginLeft: "auto",
      marginRight: "5%",
    },
  });
}

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    const divided = (num / 1000000).toFixed(1);
    return divided.toString() + "M";
  } else {
    return num.toLocaleString();
  }
};

export default function FollowCard(props: FollowCardProps) {
  const styles = makeStyles(props);
  return (
    <View style={styles.container}>
      <Image source={props.institution.image} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.institution.name}</Text>
        <Text style={styles.type}>{props.institution.type}</Text>
        <Text style={styles.followers}>
          {formatNumber(props.institution.followers)} followers
        </Text>
      </View>
      <PupilButton
        content={
          props.following.indexOf(props.institution.name) !== -1
            ? "Following"
            : "Follow"
        }
        onPress={() => {
          if (props.following.indexOf(props.institution.name) !== -1) {
            props.updateFollowing(
              props.following.filter((item) => item !== props.institution.name)
            );
          } else {
            props.updateFollowing([...props.following, props.institution.name]);
          }
        }}
        textColor={
          props.following.indexOf(props.institution.name) !== -1
            ? "white"
            : "#403D3D"
        }
        style={styles.followButton}
      />
    </View>
  );
}
