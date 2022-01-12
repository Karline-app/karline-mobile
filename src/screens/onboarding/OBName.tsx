import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

import PupilButton from "../../components/PupilButton";
import { Text, View } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import TextField from "../../components/signup/TextField";
import useColorScheme from "../../hooks/useColorScheme";

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
    fieldContainer: {
      display: "flex",
      flexDirection: "column",
      height: 600,
      width: "100%",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    progressBar: {
      width: "85%",
      top: "5%",
    },
    nameContainer: {
      flex: 1,
      width: "100%",
      marginTop: "20%",
      backgroundColor: "transparent",
    },
    locationContainer: {
      flex: 1,
      width: "100%",
      backgroundColor: "transparent",
    },
    dobContainer: {
      flex: 1,
      width: "100%",
      backgroundColor: "transparent",
    },
    label: {
      marginLeft: "7.5%",
      marginRight: "auto",
      fontFamily: "roboto-bold",
      fontSize: 18,
      color: "black",
    },
    field: {
      marginTop: "2%",
      marginBottom: "5%",
      width: "85%",
      marginLeft: "7.5%",
    },
    buttonContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
      width: "85%",
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
export default function OBName({ navigation, route }) {
  const scheme = useColorScheme();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState("");
  const styles = makeStyles(scheme);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <ProgressBar
          progress={1}
          chunks={9}
          progressColor={scheme.primary}
          barColor="#292C2E"
          style={styles.progressBar}
        />
        <View style={styles.fieldContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.label}>What's your name?</Text>
            <TextField
              placeholder="Full Name"
              placeholderColor="#403D3D"
              stateVar={name}
              onChange={setName}
              style={styles.field}
            />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.label}>Where are you based?</Text>
            <TextField
              placeholder="Location"
              placeholderColor="#403D3D"
              stateVar={location}
              onChange={setLocation}
              style={styles.field}
              icon="location-outline"
              iconType="ionicons"
              iconSize={24}
              iconColor="#403D3D"
            />
          </View>
          <View style={styles.dobContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextField
              placeholder="MM/DD/YYYY"
              placeholderColor="#403D3D"
              stateVar={dob}
              onChange={setDob}
              style={styles.field}
              icon="calendar"
              iconType="feather"
              iconSize={18}
              iconColor="#403D3D"
            />
          </View>
          <View style={styles.buttonContainer}>
            <PupilButton
              content="Back"
              onPress={() => navigation.goBack()}
              textColor="white"
              style={styles.backButton}
            />
            <PupilButton
              content="Next"
              onPress={() => navigation.navigate("OB Email", route.params)}
              textColor="white"
              style={styles.nextButton}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
