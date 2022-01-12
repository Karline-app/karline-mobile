import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

// @ts-ignore
import logo from "../../assets/images/signup/signup-logo.png";
import HorizontalDivider from "../components/HorizontalDivider";
import PupilButton from "../components/PupilButton";
import { Text, View } from "../components/Themed";
import StatusBar from "../components/ThemedStatusBar";
// import MenteeMentorText from "../components/signup/MenteeMentorText";
import useColorScheme, { ColorScheme } from "../hooks/useColorScheme";

function makeStyle(scheme: ColorScheme, selected: string[]) {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      alignItems: "center",
      backgroundColor: "white",
    },
    logo: {
      top: "10%",
      marginLeft: "5%",
      marginRight: "auto",
    },
    buttonContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "rgba(255, 255, 255, 0.0)",
      marginTop: "35%",
    },
    menteeButton: {
      width: "43%",
      borderColor: scheme.primary,
      borderWidth: 3,
      marginRight: "2%",
      backgroundColor:
        selected.indexOf("Mentee") !== -1
          ? scheme.primary
          : "rgba(255, 255, 255, 0.0)",
    },
    mentorButton: {
      width: "43%",
      borderColor: scheme.primary,
      borderWidth: 3,
      marginLeft: "2%",
      backgroundColor:
        selected.indexOf("Mentor") !== -1
          ? scheme.primary
          : "rgba(255, 255, 255, 0.0)",
    },
    nextButton: {
      flex: 1,
      width: "90%",
      borderColor: scheme.primary,
      backgroundColor: scheme.primary,
      marginBottom: "16%",
    },
    backArrow: {
      top: "8%",
      marginLeft: "5%",
      marginRight: "auto",
    },
    institutionSignUpText: {
      flex: 1,
      fontFamily: "roboto",
      fontSize: 16,
      color: "#403D3D",
      lineHeight: 16,
      textDecorationLine: "underline",
      marginLeft: "7.5%",
      marginRight: "auto",
      marginTop: "5%",
    },
    header: {
      fontFamily: "roboto-bold",
      fontSize: 44,
      color: "#403D3D",
      lineHeight: 46.5,
      height: 130,
      textAlign: "left",
    },
    headerContainer: {
      flex: 1,
      backgroundColor: "transparent",
      marginLeft: "7.5%",
      marginRight: "auto",
      marginTop: "40%",
      width: "90%",
    },
  });
}

// @ts-ignore
export default function MainSignUpScreen({ navigation }) {
  const [selected, setSelected] = useState([""]);
  const scheme = useColorScheme();
  const styles = makeStyle(scheme, selected);

  return (
    <View style={styles.container}>
      <StatusBar contentStyle="dark" />
      <AntDesign
        name="left"
        size={30}
        color="#403D3D"
        style={styles.backArrow}
        onPress={() => navigation.navigate("Splash")}
      />
      <Image source={logo} style={styles.logo} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Mentee, Mentor, or Both?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PupilButton
          content="Mentee"
          onPress={() => {
            if (selected.indexOf("Mentee") === -1) {
              setSelected([...selected, "Mentee"]);
            } else {
              setSelected(selected.filter((item) => item !== "Mentee"));
            }
          }}
          textColor={
            selected.indexOf("Mentee") !== -1 ? "white" : scheme.primary
          }
          underlayColor={scheme.primary}
          style={styles.menteeButton}
        />
        <PupilButton
          content="Mentor"
          onPress={() => {
            if (selected.indexOf("Mentor") === -1) {
              setSelected([...selected, "Mentor"]);
            } else {
              setSelected(selected.filter((item) => item !== "Mentor"));
            }
          }}
          textColor={
            selected.indexOf("Mentor") !== -1 ? "white" : scheme.primary
          }
          underlayColor={scheme.primary}
          style={styles.mentorButton}
        />
      </View>
      <Text
        style={styles.institutionSignUpText}
        onPress={() => navigation.navigate("Sign Up Institution")}
      >
        Sign up with institution
      </Text>
      <HorizontalDivider width="85%" borderColor="#403D3D" />
      <PupilButton
        content="Next"
        onPress={() => {
          const mentee = selected.indexOf("Mentee") !== -1;
          const mentor = selected.indexOf("Mentor") !== -1;
          let path;
          if (mentee && mentor) {
            path = "Both";
          } else if (mentee) {
            path = "Mentee";
          } else if (mentor) {
            path = "Mentor";
          } else {
            return;
          }
          navigation.navigate("OB Name", { path });
        }}
        textColor="white"
        style={styles.nextButton}
      />
    </View>
  );
}
