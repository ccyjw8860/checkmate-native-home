import React from "react";
import { TouchableOpacity } from "react-native";
import KakaoLogin from "react-native-kakao-login";
import styled from "styled-components/native";

console.log("kakaologin", KakaoLogin);

const login = async () => {
  try {
    var data = await KakaoLogin.login();
    console.log("kakao data", data);
  } catch (e) {
    // if(e.code === 'KAKAO_LOGIN_CANCEL'){//사용자가 취소
    // }
    // console.log('kakao error receive......', JSON.stringify(e) )
    console.log("kakao error receive......", e.code);
  }
};

const logout = async () => {
  var data = await KakaoLogin.logout();
  console.log("kakao data", data);
};

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default () => (
  <Container>
    <TouchableOpacity onPress={() => login()}>
      <Text>카카오로그인</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => logout()}>
      <Text>카카오로그아웃</Text>
    </TouchableOpacity>
  </Container>
);
