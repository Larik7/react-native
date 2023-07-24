import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export function Login() {
  return (
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
            />
            <TextInput
              style={styles.input}
              marginTop={16}
              secureTextEntry={true}
              placeholder="Пароль"
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.registrationBtn}>
            <Text style={styles.registrationTitle}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registrBtn}>
            <Text style={styles.toRegistr}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
