import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import styled from "styled-components/native";

const KakaoLoginUrl = "https://1169dd7bac6c.ngrok.io/api/v1/users/login/kakao";

const Conatainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 390px;
  height: 50px;
  border-radius: 10px;
`;

// export default ({ navigation }) => (
//   <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
//     <Text>Welcome</Text>
//     <Button
//       onPress={() => navigation.navigate("Continue")}
//       title={"Continue"}
//     >
//       <Image/>
//     </Button>
//   </View>
// );

export default ({ navigation }) => {
  return (
    <Conatainer>
      <TouchableOpacity onPress={() => Linking.openURL(KakaoLoginUrl)}>
        <Image source={require("../assets/kakao_login.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(KakaoLoginUrl)}>
        <Image source={require("../assets/kakao_login.png")} />
      </TouchableOpacity>
    </Conatainer>
  );
};
