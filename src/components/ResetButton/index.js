import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ResetButton({ handleResetCount }) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleResetCount}>
      <Icon
        name="refresh"
        size={40}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#66f",
    borderRadius: 9,
    marginHorizontal: "2%",
    paddingHorizontal: "3%",
    paddingVertical: "1%"
  }
});