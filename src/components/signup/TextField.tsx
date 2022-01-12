import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { View } from "../Themed";

type TextFieldProps = {
  placeholder?: string;
  placeholderColor?: string;
  stateVar: string;
  onChange: any;
  icon?: string;
  iconType?: string;
  iconSize?: number;
  iconColor?: string;
  secure?: boolean;
  multiline?: boolean;
  editable?: boolean;
  style: {
    width?: string | number;
    height?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
  };
};

function makeStyles(style: TextFieldProps["style"], hasIcon: boolean) {
  return StyleSheet.create({
    container: {
      width: style.width,
      height: style.height === undefined ? 48 : style.height,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "#fff",
      top: style.top,
      left: style.left,
      right: style.right,
      bottom: style.bottom,
      marginTop: style.marginTop,
      marginLeft: style.marginLeft,
      marginRight: style.marginRight,
      marginBottom: style.marginBottom,
    },
    icon: {
      padding: 10,
    },
    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      marginRight: 1,
      paddingBottom: 10,
      paddingLeft: hasIcon ? 0 : 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      height: "100%",
    },
  });
}

export default function TextField(props: TextFieldProps) {
  const validStyles = ["ionicons", "feather"];
  const hasIcon =
    props.iconType !== undefined && validStyles.indexOf(props.iconType) !== -1;
  const styles = makeStyles(props.style, hasIcon);
  let icon;
  switch (props.iconType) {
    case "ionicons":
      icon = (
        <Ionicons
          // @ts-ignore
          name={props.icon}
          style={styles.icon}
          size={props.iconSize}
          color={props.iconColor}
        />
      );
      break;
    case "feather":
      icon = (
        <Feather
          // @ts-ignore
          name={props.icon}
          style={styles.icon}
          size={props.iconSize}
          color={props.iconColor}
        />
      );
      break;
  }

  let textInput;
  if (props.placeholder !== undefined) {
    textInput = (
      <TextInput
        style={styles.input}
        value={props.stateVar}
        onChangeText={(text) => props.onChange(text)}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        secureTextEntry={props.secure}
        multiline={props.multiline}
        editable={props.editable !== undefined ? props.editable : true}
      />
    );
  } else {
    textInput = (
      <TextInput
        style={styles.input}
        value={props.stateVar}
        onChangeText={(text) => props.onChange(text)}
        secureTextEntry={props.secure}
        multiline={props.multiline}
        editable={props.editable !== undefined ? props.editable : true}
      />
    );
  }

  return (
    <View style={styles.container}>
      {icon}
      {textInput}
    </View>
  );
}
