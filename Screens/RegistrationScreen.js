import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export function Register() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../images/Photo-BG.jpg")}
      >
        <View>
          <Text>Register</Text>
          <View>
            <TextInput style={styles.input} placeholder="Login" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <TouchableOpacity style={styles.registrationBtn}>
            <Text style={styles.registrationTitle}>Registration</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
