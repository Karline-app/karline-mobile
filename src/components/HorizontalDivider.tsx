import React from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";

type HorizontalDividerProps = {
  width: number | string;
  borderColor: string;
};

export default function HorizontalDivider(props: HorizontalDividerProps) {
  return (
    <View
      style={{
        width: props.width,
        bottom: "5%",
        marginTop: "10%",
        borderBottomColor: props.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
}
