import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
};

export function Register() {
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
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShowKeyboard ? -170 : 0,
            }}
          >
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.addAvatarBtn}>
                <Image
                  style={styles.addBtn}
                  source={require("../images/addBtn.png")}
                  //   style={{ width: 500, height: 500 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle} marginTop={92}>
              Реєстрація
            </Text>
            <View>
              <TextInput
                style={styles.input}
                marginTop={33}
                onFocus={() => setIsShowKeyboard(true)}
                placeholder="Логін"
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                marginTop={16}
                onFocus={() => setIsShowKeyboard(true)}
                placeholder="Адреса електронної пошти"
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                marginTop={16}
                onFocus={() => setIsShowKeyboard(true)}
                secureTextEntry={true}
                placeholder="Пароль"
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.registrationBtn}
              onPress={keyboardHide}
            >
              <Text style={styles.registrationTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.toLogin}>Вже є акаунт? Увійти</Text>
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
    height: 540,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginBottom: 0,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    left: "35%",
    top: -60,
  },
  addBtn: {
    width: 24,
    position: "absolute",
    alignItems: "center",
    right: -12,
    bottom: -100,
  },
  // addAvatarBtn: {
  //   paddingHorizontal: 10,
  //   paddingVertical: 1,
  //   position: "absolute",
  //   right: -10,
  //   bottom: 14,
  //   width: 24,
  //   alignItems: "center",
  //   borderRadius: 100,
  //   borderWidth: 1,
  //   borderColor: "#ff6c00",
  // },
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
  loginBtn: {
    marginTop: 16,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  toLogin: {
    color: "#1B4371",
    // textAlign: "center",
  },
});
