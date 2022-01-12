import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

// @ts-ignore
import backgroundLogo from "../../assets/images/splash/splash-screen-background.png";
import PupilButton from "../components/PupilButton";
import { View } from "../components/Themed";
import StatusBar from "../components/ThemedStatusBar";
import useColorScheme from "../hooks/useColorScheme";

function makeStyle(scheme: ReturnType<typeof useColorScheme>) {
  return StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    loginButton: {
      marginTop: "110%",
      marginBottom: "5%",
      width: "85%",
      borderColor: scheme.primary,
      backgroundColor: scheme.primary,
    },
    signupButton: {
      width: "85%",
      borderColor: "white",
      backgroundColor: "white",
    },
  });
}

// @ts-ignore
export default function SplashScreen({ navigation }) {
  const scheme = useColorScheme();
  const styles = makeStyle(scheme);
  return (
    <View style={styles.container}>
      <StatusBar contentStyle="dark" />
      <ImageBackground source={backgroundLogo} style={styles.background}>
        <PupilButton
          content="Login"
          onPress={() => navigation.navigate("Login")}
          textColor="white"
          style={styles.loginButton}
        />
        <PupilButton
          content="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
          textColor={scheme.primary}
          style={styles.signupButton}
        />
      </ImageBackground>
    </View>
  );
}
