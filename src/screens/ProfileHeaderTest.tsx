// @ts-ignore

import React from "react";

// @ts-ignore
import testPFP from "../../assets/images/profileHeaderTest/brin.jpg";
import testPFPCornell from "../../assets/images/profileHeaderTest/cornell.png";
import testHeader from "../../assets/images/profileHeaderTest/testHeader.png";
import testHeaderCornell from "../../assets/images/profileHeaderTest/testHeaderCornell.png";
import { View } from "../components/Themed";
import ContactBlock, { Contact } from "../components/profile/ContactBlock";
import ExperienceBlock, {
  Experience,
} from "../components/profile/ExperienceBlock";
import ProfileHeaderCard, {
  Profile,
} from "../components/profile/profileHeaderCard";

const john = new Profile(
  "Sergey Brin",
  false,
  "",
  true,
  false,
  testPFP,
  testHeader,
  "Stanford University Alumnus",
  "Co-Founder of Google",
  234,
  "Ithaca, NY",
  ["Undergrad", "Graduate", "Math", "Technology"]
);

const cornell = new Profile(
  "Cornell University",
  true,
  "Learning. Discovery, Engagement",
  false,
  false,
  testPFPCornell,
  testHeaderCornell,
  "",
  "",
  190000,
  "Ithaca, NY",
  []
);

const contact = new Contact(
  "linkedin.com/in/sergeybrin",
  "Sergeybrin@gmail.com"
);

const experience = new Experience([
  {
    role: "Co-Founder",
    company: "Google Inc.",
    startDate: new Date(1996, 1, 4),
    endDate: new Date(1996, 1, 4),
    isPresentRole: true,
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Standford University School of Engineering",
    startDate: new Date(2004, 1, 4),
    endDate: new Date(2006, 3, 4),
    isPresentRole: true,
  },
]);

export default function ProfileHeaderCardTest() {
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
      <ProfileHeaderCard
        profile={john}
        style={{ width: "90%", height: 300, marginTop: "10%" }}
      />
      <ProfileHeaderCard
        profile={cornell}
        style={{ width: "90%", height: 270, marginTop: "10%" }}
      />

      <ContactBlock
        contact={contact}
        style={{ width: "90%", height: 170, marginTop: "10%" }}
      />
      <ExperienceBlock
        experience={experience}
        style={{ width: "90%", marginTop: "10%" }}
      />
    </View>
  );
}
