import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// @ts-ignore
import cornell from "../../../assets/images/institutions/cornell.png";
// @ts-ignore
import pupil from "../../../assets/images/institutions/pupil.png";
import FollowCard from "../../components/FollowCard";
import PupilButton from "../../components/PupilButton";
import { Text, View } from "../../components/Themed";
import ThemedStatusBar from "../../components/ThemedStatusBar";
import ProgressBar from "../../components/signup/ProgressBar";
import useColorScheme from "../../hooks/useColorScheme";

export class Institution {
  name: string;
  type: string;
  followers: number;
  image: any;

  constructor(name: string, type: string, followers: number, image: any) {
    this.name = name;
    this.type = type;
    this.followers = followers;
    this.image = image;
  }
}

const institutions = [
  {
    name: "Pupil",
    type: "EdTech",
    followers: 1200000,
    image: pupil,
  },
  {
    name: "Cornell",
    type: "Educational Institution",
    followers: 889000,
    image: cornell,
  },
].map((institution) => {
  return new Institution(
    institution.name,
    institution.type,
    institution.followers,
    institution.image
  );
});

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
      marginBottom: 5,
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
    cardStyle: {
      height: 82,
      width: "100%",
      borderColor: "#E5E5E5",
      borderRadius: 16,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 22 },
      shadowRadius: 24,
      shadowOpacity: 0.1,
      marginBottom: 15,
    },
  });
}

// @ts-ignore
export default function OBFollow({ navigation, route }) {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const [following, updateFollowing] = useState([]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ThemedStatusBar contentStyle="dark" />
        <ProgressBar
          progress={6}
          chunks={9}
          progressColor={scheme.primary}
          barColor="#292C2E"
          style={styles.progressBar}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.header}>Follow Pages</Text>
          <Text style={styles.instructions}>
            Suggested pages based on your interests. Their posts will show up in
            your feed.
          </Text>
          <View
            style={{
              width: "100%",
              height: 450,
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <ScrollView style={{ marginTop: 20, width: "90%" }}>
              {institutions.map((institution) => {
                return (
                  <FollowCard
                    key={institution.name}
                    institution={institution}
                    following={following}
                    updateFollowing={updateFollowing}
                    scheme={scheme}
                    style={styles.cardStyle}
                  />
                );
              })}
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
              onPress={() => navigation.navigate("OB Profile", route.params)}
              textColor="white"
              style={styles.nextButton}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
