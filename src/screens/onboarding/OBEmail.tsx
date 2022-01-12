import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

import PopUp from "../../components/PopUp";
import PopUpBackground from "../../components/PopUpBackground";
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
      height: 500,
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
export default function OBEmail({ navigation, route }) {
  const scheme = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);
  const styles = makeStyles(scheme);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <ProgressBar
          progress={2}
          chunks={9}
          progressColor={scheme.primary}
          barColor="#292C2E"
          style={styles.progressBar}
        />
        <View style={styles.fieldContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.label}>What's your email? (.edu)</Text>
            <TextField
              placeholder="Email Address"
              placeholderColor="#403D3D"
              stateVar={email}
              onChange={setEmail}
              style={styles.field}
            />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.label}>Set a password:</Text>
            <TextField
              placeholder=""
              placeholderColor="#403D3D"
              stateVar={password}
              onChange={setPassword}
              secure
              style={styles.field}
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
              onPress={() => setPopUpVisible(true)}
              textColor="white"
              style={styles.nextButton}
            />
          </View>
          <PopUp visible={popUpVisible} setVisible={setPopUpVisible}>
            <Text
              style={{
                fontFamily: "roboto-bold",
                fontSize: 24,
                color: "#403D3D",
              }}
            >
              Confirm Your Email
            </Text>
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 16,
                color: "#403D3D",
                marginTop: 5,
                width: 200,
                textAlign: "center",
              }}
            >
              Please check your email for the 4-digit code we sent
            </Text>
            <PupilButton
              content="Continue"
              onPress={() => {
                setPopUpVisible(false);
                navigation.navigate("OB Email Verification", route.params);
              }}
              textColor="white"
              style={{
                width: 200,
                backgroundColor: scheme.primary,
                borderColor: scheme.primary,
                fontFamily: "roboto",
                marginTop: 20,
              }}
            />
          </PopUp>
        </View>
        <PopUpBackground popUpVisible={popUpVisible} />
      </View>
    </TouchableWithoutFeedback>
  );
}
