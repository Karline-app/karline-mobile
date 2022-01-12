import { canOpenURL, openURL } from "expo-linking";
import React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { SectionGrid } from "react-native-super-grid";

const styles = StyleSheet.create({
  gridView: {
    marginTop: 89,
    marginBottom: 82,
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    width: 64,
    height: 64,
    borderRadius: 50/2,
    marginLeft: -13,
  },
  itemUser: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#403D3D",
    flex: 1,
    
  
    
  },
  itemText: {
    display: "flex",
    paddingLeft: 16,
    fontWeight: "400",
    fontSize: 14,
    color: "#7E7E7E",
    width: "60%",
    lineHeight: 24,
    
    
    
  },
  itemTime: {
    
    paddingLeft: 30,
    fontWeight: "600",
    fontSize: 12,
    color: "#979797",
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

export default function MainMessage() {
  const [activity, setActivity] = React.useState([
   
  

    {
      user: "Cornell University \n",
      messageText: "Sponsored • Hi Melanie, We'd love...",
      time: "12:36 PM",
    },
    {
      user: "Sergey Brin\n",
      messageText: "Sure, that time works for me! Le...",
      time: "5:13 PM",
    },
    {
      user: "Barack Obama\n",
      messageText: "Talk to you soon!",
      time: "5:13 PM",
    },
    {
      user: "Mark Cuban\n",
      messageText: "Great talking with you!",
      time: "5:13 PM",
    },
    {
      user: "Daymond John\n",
      messageText: "Thank you so much for meeting...",
      time: "5:13 PM",
    },
    {
      user: "Jared Douglass \n",
      messageText: "Sounds great, let me know when...",
      time: "10:21 AM",
    },
    {
      user: "Elon Musk\n",
      messageText: "I'm glad I am connected with you!",
      time: "9:59 AM",
    },
    
  ]);

  return (
    <SectionGrid
      itemDimension={300}
      //stickySectionHeadersEnabled={false}
       //staticDimension={300}
      //fixed
       spacing={23}
      sections={[
        {
          title: "",
          data: activity.slice(0,0),
        },
        {
          title: "",
          data: activity.slice(0,10),
        },
      ]}
      style={styles.gridView}
      
      renderItem={({ item, section, index }) => (
        <View style={styles.itemContainer}>
          <Image 
            style={styles.itemPicture} 
            source={require("/Users/davidlacayo/dlacayo.pupil/pupil-mobile/pupil-mobile/assets/images/signup/default-profile-pic.png")}

          />
          <Text style={styles.itemText} >
            <Text numberOfLines={1} style={{ color: "black", fontSize: 18}} > 
              <Text >{item.user}</Text>
            </Text>
            <Text numberOfLines={1}>{item.messageText}</Text>
          </Text>
          <Text style={styles.itemTime} >{item.time}</Text>
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
