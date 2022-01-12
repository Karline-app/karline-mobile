import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// @ts-ignore
import LinkedInIcon from "../../assets/images/linkedin-icon.png";
import PupilButton from "../components/PupilButton";
import { Text, View } from "../components/Themed";
import ThemedStatusBar from "../components/ThemedStatusBar";
import TextField from "../components/signup/TextField";
import useColorScheme, { ColorScheme } from "../hooks/useColorScheme";

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
    bodyContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      height: 700,
      width: "100%",
      alignItems: "center",
      backgroundColor: "transparent",
      marginTop: 40,
    },
    topRow: {
      flexDirection: "row",
      width: "90%",
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
    backArrow: {
      marginRight: "auto",
    },
    topText: {
      position: "absolute",
      fontFamily: "roboto",
      fontSize: 18,
      color: "black",
    },
    label: {
      marginLeft: "7.5%",
      marginRight: "auto",
      fontFamily: "roboto-bold",
      fontSize: 18,
      color: "black",
      marginTop: 5,
      marginBottom: 5,
    },
    field: {
      width: "85%",
    },
    withText: {
      marginLeft: "7.5%",
      marginRight: "auto",
      fontFamily: "roboto",
      fontSize: 18,
      color: "#7A7E80",
    },
    forgotPassword: {
      marginLeft: "7.5%",
      marginRight: "auto",
      fontFamily: "roboto-medium",
      fontSize: 16,
      color: scheme.primary,
      marginTop: 5,
    },
    linkedInButton: {
      backgroundColor: "#003874",
      borderColor: "#003874",
      width: "85%",
      marginTop: 15,
    },
    privacyPolicyContainer: {
      width: "75%",
      marginLeft: "7.5%",
      marginRight: "auto",
      backgroundColor: "transparent",
      marginTop: 30,
    },
    privacyPolicyText: {
      fontFamily: "roboto",
      fontSize: 12,
    },
    loginButton: {
      width: "85%",
      backgroundColor: scheme.primary,
      borderColor: scheme.primary,
      marginTop: 10,
    },
  });
}

// @ts-ignore
export default function Login({ navigation }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const linkedInButtonContent = (
    <View
      style={{
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Image
        source={LinkedInIcon}
        style={{ position: "absolute", left: 15, bottom: -2 }}
      />
      <Text
        style={{
          fontFamily: "roboto-medium",
          fontSize: 16,
          color: "white",
          alignSelf: "center",
        }}
      >
        Continue with LinkedIn
      </Text>
    </View>
  );
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <View style={styles.bodyContainer}>
          <View style={styles.topRow}>
            <AntDesign
              name="left"
              size={30}
              color="#403D3D"
              style={styles.backArrow}
              onPress={() => navigation.navigate("Splash")}
            />
            <Text style={styles.topText}>Log In</Text>
          </View>
          <Text style={[{ marginTop: 20, marginBottom: 5 }, styles.withText]}>
            With email:
          </Text>
          <Text style={styles.label}>Email</Text>
          <TextField
            stateVar={email}
            onChange={setEmail}
            style={styles.field}
          />
          <Text style={styles.label}>Password</Text>
          <TextField
            stateVar={password}
            onChange={setPassword}
            style={styles.field}
            secure
          />
          <Text
            style={styles.forgotPassword}
            onPress={() => alert("Clicked forgot password")}
          >
            Forgot password?
          </Text>
          <Text style={[{ marginTop: 40 }, styles.withText]}>
            With LinkedIn:
          </Text>
          <PupilButton
            content={linkedInButtonContent}
            onPress={() => alert("Clicked continue with LinkedIn")}
            style={styles.linkedInButton}
          />
          <View style={styles.privacyPolicyContainer}>
            <Text style={[{ color: "#B4B6B8" }, styles.privacyPolicyText]}>
              By continuing, you agree to our
              <Text
                style={[{ color: scheme.primary }, styles.privacyPolicyText]}
                onPress={() => alert("Clicked terms of service")}
              >
                {" "}
                Terms of Service Privacy Policy
              </Text>
            </Text>
          </View>
          <PupilButton
            content="Log In"
            onPress={() => alert("Clicked log in")}
            textColor="white"
            style={styles.loginButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
