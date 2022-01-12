import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../Themed";

type ProgressBarProps = {
  progress: number;
  chunks: number;
  progressColor: string;
  barColor: string;
  style: {
    width: string | number;
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

function makeStyle(props: ProgressBarProps) {
  const style = props.style;
  let progressWidth;
  if (typeof style.width === "number") {
    progressWidth = (style.width * props.progress) / props.chunks;
  } else {
    progressWidth = ((props.progress / props.chunks) * 100).toString() + "%";
  }
  return StyleSheet.create({
    bar: {
      backgroundColor: props.barColor,
      width: style.width,
      height: 4,
      borderRadius: 100,
      top: style.top,
      left: style.left,
      right: style.right,
      bottom: style.bottom,
      marginTop: style.marginTop,
      marginLeft: style.marginLeft,
      marginRight: style.marginRight,
      marginBottom: style.marginBottom,
    },
    progress: {
      width: progressWidth,
      height: 4,
      borderRadius: 100,
      backgroundColor: props.progressColor,
      top: 0,
    },
  });
}

export default function ProgressBar(props: ProgressBarProps) {
  const styles = makeStyle(props);
  return (
    <View style={styles.bar}>
      <View style={styles.progress} />
    </View>
  );
}
