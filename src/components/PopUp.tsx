import React from "react";
import { Modal, StyleSheet } from "react-native";

import { View } from "./Themed";

type PopUpProps = {
  visible: boolean;
  setVisible: any;
  // @ts-ignore
  children;
};

export default function PopUp(props: PopUpProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={props.visible}
      onRequestClose={() => props.setVisible(!props.visible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{props.children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
