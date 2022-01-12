import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import React, { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import ActivityScreen from "./screens/ActivityScreen";
import AddExperience from "./screens/AddExperience";
import Login from "./screens/Login";
// import M2MCardTest from "./screens/M2MCardTest";
import MainSignUpScreen from "./screens/MainSignUpScreen";
// import ProfileHeaderTest from "./screens/ProfileHeaderTest";
import SignUpInstitution from "./screens/SignUpInstitution";
import SplashScreen from "./screens/SplashScreen";
import OBCareer from "./screens/onboarding/OBCareer";
import OBEducation from "./screens/onboarding/OBEducation";
import OBEducationBackground from "./screens/onboarding/OBEducationBackground";
import OBEmail from "./screens/onboarding/OBEmail";
import OBEmailVerification from "./screens/onboarding/OBEmailVerification";
import OBExperience from "./screens/onboarding/OBExperience";
import OBFollow from "./screens/onboarding/OBFollow";
import OBName from "./screens/onboarding/OBName";
import OBProfile from "./screens/onboarding/OBProfile";
import OBSocialCauseExperience from "./screens/onboarding/OBSocialCauseExperience";
import OBSocialCauses from "./screens/onboarding/OBSocialCauses";

const Stack = createStackNavigator();

const App: FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <M2MCardTest /> */}
        {/* <ProfileHeaderTest /> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Sign Up" component={MainSignUpScreen} />
            <Stack.Screen name="OB Name" component={OBName} />
            <Stack.Screen name="OB Email" component={OBEmail} />
            <Stack.Screen
              name="OB Email Verification"
              component={OBEmailVerification}
            />
            <Stack.Screen name="OB Education" component={OBEducation} />
            <Stack.Screen name="OB Career" component={OBCareer} />
            <Stack.Screen name="OB Social Causes" component={OBSocialCauses} />
            <Stack.Screen name="OB Follow" component={OBFollow} />
            <Stack.Screen name="OB Profile" component={OBProfile} />
            <Stack.Screen name="OB Experience" component={OBExperience} />
            <Stack.Screen
              name="OB Education Background"
              component={OBEducationBackground}
            />
            <Stack.Screen
              name="OB Social Cause Experience"
              component={OBSocialCauseExperience}
            />
            <Stack.Screen
              name="Sign Up Institution"
              component={SignUpInstitution}
            />
            <Stack.Screen name="Add Experience" component={AddExperience} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

const root = registerRootComponent(App);

export default root;
