import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function IncrementButton({ count, onSetCount, handleResetCount }) {
  function handleIncrementCount() {
    if (count < 99) {
      onSetCount(prevCount => prevCount + 1)
    } else {
      handleResetCount();
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleIncrementCount}>
      <Icon
        name="add"
        size={40}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6f6",
    borderRadius: 9,
    paddingHorizontal: "3%",
    paddingVertical: "1%"
  }
});