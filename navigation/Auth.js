import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Continue from "../screens/Continue";
import Logout from "../screens/Logout";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: BackBtn,
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="Continue" component={Continue} />
    <Auth.Screen name="Logout" component={Logout} />
  </Auth.Navigator>
);
