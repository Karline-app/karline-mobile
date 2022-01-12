import { AntDesign } from "@expo/vector-icons";
import React, { useState, useRef, RefObject } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

import PopUp from "../../components/PopUp";
import PopUpBackground from "../../components/PopUpBackground";
import PupilButton from "../../components/PupilButton";
import { Text, View } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import useColorScheme, { ColorScheme } from "../../hooks/useColorScheme";

function makeStyles(scheme: ColorScheme, curDig: number) {
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
    backArrow: {
      marginRight: "auto",
      marginLeft: "5%",
    },
    header: {
      fontFamily: "inter-bold",
      fontSize: 24,
      color: "black",
      marginTop: 30,
    },
    instructions: {
      fontFamily: "inter",
      fontSize: 16,
      color: "#B4B6B8",
      marginTop: 10,
      width: "80%",
      textAlign: "center",
    },
    codeContainer: {
      marginTop: 30,
      flexDirection: "row",
      width: "65%",
      backgroundColor: "transparent",
      justifyContent: "space-evenly",
    },
    clearCode: {
      fontFamily: "inter-medium",
      fontSize: 16,
      color: scheme.primary,
      marginTop: 10,
    },
    continueButton: {
      width: "85%",
      backgroundColor: curDig < 4 ? scheme.primary + "88" : scheme.primary,
      borderColor: curDig < 4 ? scheme.primary + "88" : scheme.primary,
      marginTop: 80,
      fontFamily: "inter-medium",
    },
    resend: {
      fontFamily: "inter-medium",
      fontSize: 16,
      color: scheme.primary,
      marginTop: 20,
    },
  });
}

function CodeInput(props: {
  num: number;
  digs: string[];
  setDigs: any[];
  refs: RefObject<TextInput>[];
  curDig: number;
  setCurDig: any;
  scheme: ColorScheme;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      value={props.digs[props.num]}
      onChangeText={(val) => {
        props.setCurDig(props.curDig + 1);
        props.setDigs[props.num](val);
        if (props.num < 3) {
          // @ts-ignore
          props.refs[props.num + 1].current.focus();
        } else {
          // @ts-ignore
          props.refs[props.num].current.blur();
        }
      }}
      // @ts-ignore
      style={{
        width: 48,
        height: 48,
        textAlign: "center",
        borderColor: focused
          ? props.scheme.primary
          : props.curDig <= props.num
          ? "black"
          : "transparent",
        borderWidth: 1,
        borderRadius: 48,
        fontFamily: "inter",
        fontSize: 18,
      }}
      onKeyPress={({ nativeEvent }) => {
        if (nativeEvent.key === "Backspace") {
          if (props.num > 0) {
            props.setCurDig(props.curDig - 1);
            props.setDigs[props.num - 1]("");
            // @ts-ignore
            props.refs[props.num - 1].current.focus();
          }
        }
      }}
      onTouchEnd={() => {
        if (props.curDig < 4 && props.num !== props.curDig) {
          // @ts-ignore
          props.refs[props.curDig].current.focus();
        }
      }}
      onFocus={() => {
        if (props.curDig === props.num) {
          setFocused(true);
        }
      }}
      onBlur={() => {
        setFocused(false);
      }}
      ref={props.refs[props.num]}
      maxLength={1}
      keyboardType="number-pad"
      underlineColorAndroid="transparent"
      editable={props.curDig < 4}
    />
  );
}

// @ts-ignore
export default function OBEmailVerification({ navigation, route }) {
  const scheme = useColorScheme();
  const [digit0, setDigit0] = useState("");
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const digs = [digit0, digit1, digit2, digit3];
  const setDigs = [setDigit0, setDigit1, setDigit2, setDigit3];
  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [curDig, setCurDig] = useState(0);
  const styles = makeStyles(scheme, curDig);
  const [popUpVisible, setPopUpVisible] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <View style={styles.bodyContainer}>
          <AntDesign
            name="left"
            size={30}
            color="#403D3D"
            style={styles.backArrow}
            onPress={() => navigation.navigate("OB Email")}
          />
          <Text style={styles.header}>Enter authentication code</Text>
          <Text style={styles.instructions}>
            Enter the 4-digit code that we have sent via email
          </Text>
          <View style={styles.codeContainer}>
            <CodeInput
              num={0}
              digs={digs}
              setDigs={setDigs}
              curDig={curDig}
              setCurDig={setCurDig}
              refs={refs}
              scheme={scheme}
            />
            <CodeInput
              num={1}
              digs={digs}
              setDigs={setDigs}
              curDig={curDig}
              setCurDig={setCurDig}
              refs={refs}
              scheme={scheme}
            />
            <CodeInput
              num={2}
              digs={digs}
              setDigs={setDigs}
              curDig={curDig}
              setCurDig={setCurDig}
              refs={refs}
              scheme={scheme}
            />
            <CodeInput
              num={3}
              digs={digs}
              setDigs={setDigs}
              curDig={curDig}
              setCurDig={setCurDig}
              refs={refs}
              scheme={scheme}
            />
          </View>
          <Text
            style={styles.clearCode}
            onPress={() => {
              setCurDig(0);
              setDigs.forEach((setDig) => setDig(""));
            }}
          >
            Clear code
          </Text>
          <PupilButton
            content="Continue"
            textColor="white"
            onPress={() => setPopUpVisible(true)}
            disabled={curDig < 4}
            style={styles.continueButton}
          />
          <Text
            style={styles.resend}
            onPress={() => alert("Clicked resend code")}
          >
            Resend Code
          </Text>
          <PopUp visible={popUpVisible} setVisible={setPopUpVisible}>
            <Text
              style={{
                fontFamily: "roboto-bold",
                fontSize: 24,
                color: "#403D3D",
              }}
            >
              Email Confirmed
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
              Now to set up your profile!
            </Text>
            <PupilButton
              content="Continue"
              onPress={() => {
                setPopUpVisible(false);
                navigation.navigate("OB Education", route.params);
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
