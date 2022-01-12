import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CheckBox from "react-native-check-box";

import PupilButton from "../../components/PupilButton";
import { Text, View } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import TextField from "../../components/signup/TextField";
import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";

function makeStyles(scheme: ColorScheme, currently: boolean) {
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
      width: "85%",
    },
    bottomButtonContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
      width: "85%",
      marginTop: "15%",
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
    label: {
      fontFamily: "roboto-bold",
      fontSize: 18,
      marginRight: "auto",
      marginLeft: "7.5%",
      color: "black",
      marginTop: 15,
      marginBottom: 5,
    },
    titleField: {
      width: "85%",
    },
    companyField: {
      width: "85%",
    },
    dateFieldsContainer: {
      width: "85%",
      flexDirection: "row",
      backgroundColor: "transparent",
    },
    startDateField: {
      width: "47.5%",
      marginRight: "2.5%",
    },
    endDateField: {
      width: "47.5%",
      marginLeft: "2.5%",
    },
    currentlyContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "transparent",
      marginTop: 15,
      marginRight: "auto",
      marginLeft: "7.5%",
    },
    currentlyText: {
      fontFamily: "roboto",
      fontSize: 16,
      color: "#403D3D",
    },
  });
}

// @ts-ignore
export default function OBEducationBackground({ navigation, route }) {
  const scheme = useColorScheme();
  const [subject, updateSubject] = useState("");
  const [school, updateSchool] = useState("");
  const [startDate, updateStartDate] = useState("");
  const [endDate, updateEndDate] = useState("");
  const [oldEndDate, updateOldEndDate] = useState("");
  const [currently, updateCurrently] = useState(false);
  const styles = makeStyles(scheme, currently);
  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ThemedStatusBar contentStyle="dark" />
          <ProgressBar
            progress={8}
            chunks={9}
            progressColor={scheme.primary}
            barColor="#292C2E"
            style={styles.progressBar}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.header}>Set up your profile</Text>
            <Text style={styles.instructions}>
              Set up at least one experience and educational background - you
              can add more later :)
            </Text>
            <Text style={styles.label}>What do you study?</Text>
            <TextField
              stateVar={subject}
              onChange={updateSubject}
              style={styles.titleField}
            />
            <Text style={styles.label}>School</Text>
            <TextField
              stateVar={school}
              onChange={updateSchool}
              style={styles.companyField}
            />
            <Text style={styles.label}>How long?</Text>
            <View style={styles.dateFieldsContainer}>
              <TextField
                stateVar={startDate}
                onChange={updateStartDate}
                placeholder="MM/DD/YYYY"
                placeholderColor="#464A4D"
                style={styles.startDateField}
                icon="calendar"
                iconType="feather"
                iconSize={18}
                iconColor="#403D3D"
              />
              <TextField
                stateVar={endDate}
                onChange={updateEndDate}
                placeholder="MM/DD/YYYY"
                placeholderColor="#464A4D"
                style={styles.endDateField}
                icon="calendar"
                iconType="feather"
                iconSize={18}
                iconColor="#403D3D"
                editable={!currently}
              />
            </View>
            <View style={styles.currentlyContainer}>
              <CheckBox
                style={{ transform: [{ scale: 1.2 }], marginRight: 7 }}
                onClick={() => {
                  if (currently) {
                    updateCurrently(false);
                    updateEndDate(oldEndDate);
                  } else {
                    updateCurrently(true);
                    updateOldEndDate(endDate);
                    updateEndDate("Present");
                  }
                }}
                isChecked={currently}
                checkBoxColor={scheme.primary}
              />
              <Text style={styles.currentlyText}>I currently go here</Text>
            </View>
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
                  navigation.navigate(
                    "OB Social Cause Experience",
                    route.params
                  )
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
