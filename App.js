import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./src/screens/auth/Landing";
import SignUp from "./src/screens/auth/SignUp";
import Login from "./src/screens/auth/Login";
import ResetPassword from "./src/screens/auth/ResetPassword";
import Cravings from "./src/screens/main/Cravings";
import Home from "./src/screens/main/Home";
import Settings from "./src/screens/main/Settings";
import Group from "./src/screens/main/Group";
import EditName from "./src/screens/main/EditName";
import Favorites from "./src/screens/main/Favorites";
import RecentGroups from "./src/screens/main/RecentGroups";
import GroupInvite from "./src/screens/main/Group/GroupInvite";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Cravings" component={Cravings} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="GroupInvite" component={GroupInvite} />
        <Stack.Screen name="EditName" component={EditName} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="RecentGroups" component={RecentGroups} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
