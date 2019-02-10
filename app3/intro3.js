import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1 }}>
          <Ionicons
            style={{ alignSelf: "center", marginTop: 100 }}
            name={Platform.OS == "ios" ? "ios-desktop" : "md-desktop"}
            size={200}
            color="green"
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: 70,
              color: "#2c2828",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 18,
              marginBottom: 30,
              fontWeight: "500"
            }}
          >
            In hac habitasse platea dictumst.
          </Text>

          <Text
            style={{
              alignSelf: "center",
              width: 295,
              height: 88,
              color: "#929aab",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 22
            }}
          >
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed
            sapien metus, scelerisque nec pharetra id, tempor a tortor.
            Pellentesque non dignissim neque.
          </Text>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
            style={{
              marginTop: 20,
              width: 300,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#0074e4",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "600",
                alignSelf: "center"
              }}
            >
              GET STARTED NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
