import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

import PupilButton from "../../components/PupilButton";
import { View, Text } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import useColorScheme from "../../hooks/useColorScheme";

const educationLevels = [
  "High School",
  "Undergraduate",
  "Graduate",
  "Medical",
  "Law",
  "Business",
  "Trade",
];

function makeButtons(
  selected: string[],
  // @ts-ignore
  updateSelected,
  scheme: ReturnType<typeof useColorScheme>
) {
  return educationLevels.map((educationLevel) => {
    return (
      <PupilButton
        key={educationLevel}
        content={educationLevel}
        onPress={() => {
          if (selected.indexOf(educationLevel) !== -1) {
            updateSelected(selected.filter((item) => item !== educationLevel));
          } else {
            updateSelected([...selected, educationLevel]);
          }
        }}
        textColor={selected.indexOf(educationLevel) !== -1 ? "white" : "black"}
        style={{
          backgroundColor:
            selected.indexOf(educationLevel) !== -1 ? scheme.primary : "white",
          fontFamily: "roboto",
          borderColor: scheme.primary,
          marginLeft: "7.5%",
          marginRight: "auto",
          marginTop: 6,
          marginBottom: 6,
        }}
      />
    );
  });
}

function makeStyles(scheme: ReturnType<typeof useColorScheme>) {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      alignItems: "center",
      backgroundColor: "white",
    },
    progressBar: {
      width: "85%",
      top: "5%",
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      height: 700,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    header: {
      fontFamily: "roboto-bold",
      fontSize: 32,
      color: "black",
      marginLeft: "7.5%",
      marginRight: "auto",
    },
    instructions: {
      fontFamily: "roboto",
      fontSize: 16,
      color: "black",
      marginLeft: "7.5%",
      marginRight: "auto",
      marginBottom: 20,
    },
    bottomButtonContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
      width: "85%",
      marginTop: "3%",
    },
    backButton: {
      width: "47.5%",
      marginRight: "2.5%",
      borderColor: "#403D3D",
      backgroundColor: "#403D3D",
    },
    nextButton: {
      width: "47.5%",
      marginLeft: "2.5%",
      borderColor: scheme.primary,
      backgroundColor: scheme.primary,
    },
  });
}

// @ts-ignore
export default function OBEducation({ navigation, route }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [selected, updateSelected] = useState([]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <ProgressBar
          progress={3}
          chunks={9}
          progressColor={scheme.primary}
          barColor="#292C2E"
          style={styles.progressBar}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.header}>Education</Text>
          <Text style={styles.instructions}>
            Select tags to indicate your educational background. Click all that
            apply.
          </Text>
          {makeButtons(selected, updateSelected, scheme)}
          <View style={styles.bottomButtonContainer}>
            <PupilButton
              content="Back"
              onPress={() => navigation.goBack()}
              textColor="white"
              style={styles.backButton}
            />
            <PupilButton
              content="Next"
              onPress={() => navigation.navigate("OB Career", route.params)}
              textColor="white"
              style={styles.nextButton}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
