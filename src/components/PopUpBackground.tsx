import { BlurView } from "expo-blur";
import React from "react";

export default function PopUpBackground(props: { popUpVisible: boolean }) {
  if (props.popUpVisible) {
    return (
      <BlurView
        style={{ position: "absolute", width: "100%", height: "100%" }}
        intensity={75}
        tint="light"
      />
    );
  } else {
    return null;
  }
}
