import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

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
    instructions: {
      fontFamily: "roboto",
      fontSize: 18,
      color: "#7A7E80",
      width: "85%",
      marginTop: 20,
    },
    label: {
      marginLeft: "7.5%",
      marginRight: "auto",
      fontFamily: "roboto-bold",
      fontSize: 18,
      color: "black",
      marginTop: 15,
      marginBottom: 5,
    },
    field: {
      width: "85%",
    },
    messageField: {
      width: "85%",
      height: 200,
    },
    sendButton: {
      backgroundColor: scheme.primary,
      borderColor: scheme.primary,
      marginTop: 20,
      width: "85%",
    },
  });
}

// @ts-ignore
export default function SignUpInstitution({ navigation }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-100}>
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
                onPress={() => navigation.navigate("Sign Up")}
              />
              <Text style={styles.topText}>Sign Up</Text>
            </View>
            <Text style={styles.instructions}>
              To sign up with an institution, please contact us by sending an
              email to our service team:
            </Text>
            <Text style={styles.label}>Email</Text>
            <TextField
              stateVar={email}
              onChange={setEmail}
              style={styles.field}
              placeholder="example@gmail.com"
              placeholderColor="#403D3D"
            />
            <Text style={styles.label}>Message</Text>
            <TextField
              stateVar={message}
              onChange={setMessage}
              style={styles.messageField}
              multiline
            />
            <PupilButton
              content="Send"
              textColor="white"
              onPress={() => null}
              style={styles.sendButton}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
