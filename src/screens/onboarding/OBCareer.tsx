import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import PupilButton from "../../components/PupilButton";
import { View, Text } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import useColorScheme from "../../hooks/useColorScheme";

const interests = [
  "Agriculture",
  "Architecture",
  "Business",
  "Communication",
  "Design",
  "Education",
  "Engineering",
  "Entrepreneurship",
  "Finance",
  "Government",
  "Health",
  "Law",
  "Labor",
  "Marketing",
  "Mathematics",
  "Medicine",
  "Music",
  "Military",
  "Public Safety",
  "Science",
  "Technology",
  "Visual Arts",
];

function makeButtons(
  selected: string[],
  // @ts-ignore
  updateSelected,
  scheme: ReturnType<typeof useColorScheme>
) {
  return interests.map((interest) => {
    return (
      <PupilButton
        key={interest}
        content={interest}
        onPress={() => {
          if (selected.indexOf(interest) !== -1) {
            updateSelected(selected.filter((item) => item !== interest));
          } else {
            updateSelected([...selected, interest]);
          }
        }}
        textColor={selected.indexOf(interest) !== -1 ? "white" : "black"}
        style={{
          backgroundColor:
            selected.indexOf(interest) !== -1 ? scheme.primary : "white",
          fontFamily: "roboto",
          borderColor: scheme.primary,
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 5,
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
export default function OBCareer({ navigation, route }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [selected, updateSelected] = useState([]);
  let others;
  switch (route.params.path) {
    case "Mentor":
      others = "mentees";
      break;
    case "Mentee":
      others = "mentors";
      break;
    case "Both":
      others = "mentors/mentees";
      break;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <ProgressBar
          progress={4}
          chunks={9}
          progressColor={scheme.primary}
          barColor="#292C2E"
          style={styles.progressBar}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.header}>Career Interests</Text>
          <Text style={styles.instructions}>
            We will recommend {others} based on your career interests.
          </Text>
          <View
            style={{
              height: 450,
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <ScrollView
              contentContainerStyle={{
                width: "120%",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {makeButtons(selected, updateSelected, scheme)}
            </ScrollView>
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
                navigation.navigate("OB Social Causes", route.params)
              }
              textColor="white"
              style={styles.nextButton}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
