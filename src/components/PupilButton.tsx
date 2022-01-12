import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

import { Text, View } from "./Themed";

function makeStyle(
  textColor: string | undefined,
  pupilStyle: PupilButtonProps["style"]
) {
  return StyleSheet.create({
    button: {
      top: pupilStyle.top,
      left: pupilStyle.left,
      right: pupilStyle.right,
      bottom: pupilStyle.bottom,
      margin: pupilStyle.margin,
      marginTop: pupilStyle.marginTop,
      marginLeft: pupilStyle.marginLeft,
      marginRight: pupilStyle.marginRight,
      marginBottom: pupilStyle.marginBottom,
      alignSelf: "center",
      width: pupilStyle.width,
      height: pupilStyle.height === undefined ? 50 : pupilStyle.height,
      borderRadius: 50,
      borderColor: pupilStyle.borderColor,
      // @ts-ignore
      borderWidth:
        pupilStyle.borderWidth === undefined ? 1 : pupilStyle.borderWidth,
      justifyContent: "center",
    },
    buttonView: {
      flex: 1,
      backgroundColor: pupilStyle.backgroundColor,
      justifyContent: "center",
      borderRadius: 50,
    },
    buttonText: {
      textAlign: "center",
      fontFamily:
        pupilStyle.fontFamily === undefined
          ? "roboto-bold"
          : pupilStyle.fontFamily,
      fontSize: pupilStyle.fontSize === undefined ? 16 : pupilStyle.fontSize,
      color: textColor,
      paddingHorizontal: 20,
    },
  });
}

type PupilButtonProps = {
  content: any;
  onPress: () => void;
  textColor?: string;
  underlayColor?: string;
  disabled?: boolean;
  style: {
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string | number;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    margin?: number | string;
    marginTop?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
    fontFamily?: string;
    fontSize?: number;
  };
};

export default function PupilButton(props: PupilButtonProps) {
  const styles = makeStyle(props.textColor, props.style);
  let content;
  if (typeof props.content === "string") {
    content = <Text style={styles.buttonText}>{props.content}</Text>;
  } else if (typeof props.content === "object") {
    content = props.content;
  }
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={
        props.underlayColor === undefined ? "black" : props.underlayColor
      }
      style={styles.button}
      disabled={props.disabled}
    >
      <View style={styles.buttonView}>{content}</View>
    </TouchableHighlight>
  );
}
