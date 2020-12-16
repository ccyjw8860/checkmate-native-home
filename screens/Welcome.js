import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import styled from "styled-components/native";

const KakaoLoginUrl = "https://1169dd7bac6c.ngrok.io/api/v1/users/login/kakao";

const Conatainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Image = styled.Image`
  width: 390px;
  height: 50px;
  border-radius: 10px;
`;

const Messeage = styled.Text``;

export default ({ navigation }) => {
  console.log(navigation);
  return (
    <Conatainer>
      <SubContainer>
        <Messeage>Welcome</Messeage>
      </SubContainer>
      <SubContainer>
        <TouchableOpacity onPress={() => Linking.openURL(KakaoLoginUrl)}>
          <Image source={require("../assets/kakao_login.png")} />
        </TouchableOpacity>
      </SubContainer>
    </Conatainer>
  );
};
