import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SectionGrid } from "react-native-super-grid";

const styles = StyleSheet.create({
  gridView: {
    marginTop: 80,
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 10,
    height: 70,
  },
  itemPicture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  itemUser: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#403D3D",
  },
  itemText: {
    paddingLeft: 23,
    fontWeight: "400",
    fontSize: 14,
    color: "#403D3D",
    width: "60%",
  },
  itemTime: {
    //fix to flex end
    paddingLeft: 30,
    fontWeight: "600",
    fontSize: 14,
    color: "#C3C3C4",
  },
  sectionHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    alignItems: "flex-start",
    paddingLeft: 10,
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
  },
});

export default function ActivityScreen() {
  const [activity, setActivity] = React.useState([
    {
      user: "Barack Obama",
      profilePicture: "connection to profile picture",
      activityText: "connected with you.",
      time: "12:36 PM",
    },
    {
      user: "Sergey Brin",
      profilePicture: "connection to profile picture",
      activityText: "liked your post.",
      time: "12:30 PM",
    },
    {
      user: "Sergey Brin",
      profilePicture: "connection to profile picture",
      activityText: 'commented on your post: "Congrats!"',
      time: "12:22 PM",
    },
    {
      user: "Elon Musk",
      profilePicture: "connection to profile picture",
      activityText: "liked your post.",
      time: "11:05 AM",
    },
    {
      user: "Elon Musk",
      profilePicture: "connection to profile picture",
      activityText: "shared your post.",
      time: "10:56 AM",
    },
    {
      user: "Bill Gates",
      profilePicture: "connection to profile picture",
      activityText: "connected with you",
      time: "10:36 AM",
    },
    {
      user: "Jeff Bezos",
      profilePicture: "connection to profile picture",
      activityText: 'commented on your post: "Impressive!"',
      time: "10:21 AM",
    },
    {
      user: "Elon Musk",
      profilePicture: "connection to profile picture",
      activityText: "connected with you.",
      time: "9:59 AM",
    },
    {
      user: "Tim Cook",
      profilePicture: "connection to profile picture",
      activityText: "shared your profile.",
      time: "9:30 AM",
    },
    {
      user: "Steve Jobs",
      profilePicture: "connection to profile picture",
      activityText: "loved your post.",
      time: "9:27 AM",
    },
  ]);

  return (
    <SectionGrid
      itemDimension={300}
      stickySectionHeadersEnabled={false}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: "New",
          data: activity.slice(0, 3),
        },
        {
          title: "Earlier",
          data: activity.slice(3, 10),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <View style={styles.itemContainer}>
          <Image
            source={require("/Users/baku/Documents/GitHub/pupil-mobile/assets/images/signup/default-profile-pic.png")}
            style={styles.itemPicture}
          />
          <Text style={styles.itemText}>
            <Text style={{ fontWeight: "bold" }}>{item.user}</Text>
            <Text> {item.activityText}</Text>
          </Text>
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text
            style={{
              color: "#909293",
              paddingTop: 12,
              paddingLeft: 10,
            }}
          >
            {section.title}
          </Text>
        </View>
      )}
    />
  );
}
