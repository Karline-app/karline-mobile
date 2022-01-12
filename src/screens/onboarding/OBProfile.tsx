import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// @ts-ignore
import DefaultProfilePic from "../../../assets/images/signup/default-profile-pic.png";
import PupilButton from "../../components/PupilButton";
import { Text, View } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import TextField from "../../components/signup/TextField";
import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";

function makeStyles(scheme: ColorScheme) {
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
      top: "5%",
      display: "flex",
      flexDirection: "column",
      height: 700,
      width: "100%",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    header: {
      fontFamily: "roboto-bold",
      fontSize: 32,
      color: "black",
      marginLeft: "7.5%",
      marginRight: "auto",
      marginTop: 8,
      marginBottom: 10,
    },
    instructions: {
      fontFamily: "roboto",
      fontSize: 16,
      color: "black",
      marginLeft: "7.5%",
      marginRight: "auto",
      marginBottom: 10,
    },
    bottomButtonContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
      width: "85%",
      marginTop: "10%",
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
    profilePic: {
      marginTop: 15,
    },
    changeButton: {
      height: 32,
      fontFamily: "roboto",
      fontSize: 16,
      borderColor: scheme.primary,
      backgroundColor: scheme.primary,
      marginTop: 10,
    },
    label: {
      fontFamily: "roboto-bold",
      fontSize: 18,
      marginRight: "auto",
      marginLeft: "7.5%",
      color: "black",
      marginTop: 15,
      marginBottom: 5,
    },
    headlineField: {
      width: "85%",
    },
    bioField: {
      width: "85%",
      height: 186,
    },
  });
}

// @ts-ignore
export default function OBProfile({ navigation, route }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [headline, updateHeadline] = useState("");
  const [bio, updateBio] = useState("");
  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ThemedStatusBar contentStyle="dark" />
          <ProgressBar
            progress={7}
            chunks={9}
            progressColor={scheme.primary}
            barColor="#292C2E"
            style={styles.progressBar}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.header}>Set up your profile</Text>
            <Text style={styles.instructions}>
              Set up a profile picture, headline, and bio
            </Text>
            <Image source={DefaultProfilePic} style={styles.profilePic} />
            <PupilButton
              content="Change"
              onPress={() => alert("Clicked change profile pic")}
              textColor="white"
              style={styles.changeButton}
            />
            <Text style={styles.label}>Headline</Text>
            <TextField
              stateVar={headline}
              onChange={updateHeadline}
              placeholder="Ex: CEO of Pupil, Harvard University Grad"
              placeholderColor="#494A4B"
              style={styles.headlineField}
            />
            <Text style={styles.label}>Bio</Text>
            <TextField
              stateVar={bio}
              onChange={updateBio}
              placeholder=""
              placeholderColor="#494A4B"
              style={styles.bioField}
              multiline
            />
            <View style={styles.bottomButtonContainer}>
              <PupilButton
                content="Back"
                onPress={() => navigation.goBack()}
                textColor="white"
                style={styles.backButton}
              />
              <PupilButton
                content="Next"
                onPress={() =>
                  navigation.navigate("OB Experience", route.params)
                }
                textColor="white"
                style={styles.nextButton}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
