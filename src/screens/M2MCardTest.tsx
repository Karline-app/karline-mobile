// @ts-ignore

import React from "react";

// @ts-ignore
import PFP from "../../assets/images/test-profile-pic.png";
import { View } from "../components/Themed";
// import AboutBlock from "../components/profile/AboutBlock";
// import BioBlock from "../components/profile/BioBlock";
import M2MCard, { Profile } from "../components/profile/M2MCard";

const john = new Profile(
  "John Isaac",
  true,
  true,
  PFP,
  "Stanford University",
  "Co-Founder of Google",
  ["Undergrad", "Graduate", "Math", "Technology"],
  {
    university: "University of Maryland",
    degree: "B.S., Computer Science",
    universityIcon:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png",
    attendance: "4 years [August 1996 - June 2000]",
  }
);

export default function M2MCardTest() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <M2MCard
        profile={john}
        style={{ width: "90%", height: 520, marginTop: "10%" }}
      />
      {/* <AboutBlock /> */}
      {/* <BioBlock /> */}
    </View>
  );
}
