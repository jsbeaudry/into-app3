import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Intro1 from "./app3/intro1";
import Intro2 from "./app3/intro2";
import Intro3 from "./app3/intro3";

import { Ionicons } from "@expo/vector-icons";

const A3 = createStackNavigator({
  Intro1: {
    screen: Intro1,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Intro2: {
    screen: Intro2,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Intro3: {
    screen: Intro3,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A3);
