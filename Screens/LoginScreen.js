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
          <Text style={styles.formTitle}>Login</Text>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity style={styles.registrationBtn}>
            <Text style={styles.registrationTitle}>Login</Text>
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
    // alignItems: "center",
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
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    marginTop: 16,
  },
});
