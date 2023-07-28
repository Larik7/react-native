import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
};

export function Login() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };

  useEffect(()=>{
    const onChange = () => {
      const width = Dimensions.get("window").width
    }
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    }
  }, [])

  if (!isReady) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn}/>
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../images/Photo-BG.jpg")}
      >
        <View style={styles.formContainer}>
          <Text style={styles.formTitle} marginTop={32}>
            Увійти
          </Text>
          <View>
            <TextInput
              style={styles.input}
              marginTop={33}
              placeholder="Адреса електронної пошти"
              value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
            />
            <TextInput
              style={styles.input}
              marginTop={16}
              secureTextEntry={true}
              placeholder="Пароль"
              value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.registrationBtn} onPress={keyboardHide}>
            <Text style={styles.registrationTitle}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registrBtn}>
            <Text style={styles.toRegistr}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    height: 450,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  formTitle: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
  registrationBtn: {
    backgroundColor: "#FF6C00",
    marginTop: 43,
    marginHorizontal: 16,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  registrationTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: 400,
  },
  registrBtn: {
    marginTop: 16,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  toRegistr: {
    color: "#1B4371",
    // textAlign: "center",
  },
});
