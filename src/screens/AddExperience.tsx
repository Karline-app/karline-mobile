import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

// @ts-ignore
import { Text, View } from "../components/Themed";
import TextField from "../components/signup/TextField";
import useColorScheme, { ColorScheme } from "../hooks/useColorScheme";

function makeStyles(scheme: ColorScheme) {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
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
    header: {
      height: 88,
    },
    label: {
      marginLeft: "7.5%",
      marginRight: "auto",
      marginTop: 12,
      marginBottom: 10,
      fontFamily: "roboto-bold",
      fontSize: 18,
      color: "black",
    },
    field: {
      width: "85%",
      padding: 15,
    },
    small_field: {
      width: 154,
      marginTop: 10,
      borderColor: "#464A4D",
      marginRight: 10,
      marginLeft: 10,
    },
    withText: {
      marginTop: 0,
      fontFamily: "roboto",
      fontSize: 16,
      fontWeight: "300",
      color: "#403D3D",
      marginRight: "25%",
      marginLeft: "1.5%",
    },
  });
}

// @ts-ignore
export default function AddExperience({ navigation }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [experience, addExperience] = useState("");
  const [company, addCompany] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.bodyContainer}>
          <Text style={styles.label}>Experience Title</Text>
          <TextField
            stateVar={experience}
            onChange={addExperience}
            style={styles.field}
            placeholder="Sales Intern, Club President, etc."
            placeholderColor="#828688"
            icon="calendar"
            iconType="Feather"
            iconSize={24}
            iconColor="#828688"
          />
          <Text style={styles.label}>Company</Text>
          <TextField
            stateVar={company}
            onChange={addCompany}
            style={styles.field}
            placeholder="Company name"
            placeholderColor="#828688"
          />
          <Text style={styles.label}>How long?</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.withText]}>Start Date</Text>
            <Text style={[styles.withText]}>End Date</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextField
              stateVar={start}
              onChange={setStart}
              style={styles.small_field}
              secure={false}
              icon="calendar"
              iconType="feather"
              iconSize={24}
              iconColor="#828688"
              placeholder="07/17/2020"
              placeholderColor="#828688"
            />
            <TextField
              stateVar={end}
              onChange={setEnd}
              style={styles.small_field}
              secure={false}
              icon="calendar"
              iconType="feather"
              iconSize={24}
              iconColor="#828688"
              placeholder="12/01/2021"
              placeholderColor="#828688"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
