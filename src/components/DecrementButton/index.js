import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DecrementButton({ count, onSetCount, handleResetCount }) {
  function handleDecrementCount() {
    if (count > -99) {
      onSetCount(prevCount => prevCount - 1)
    } else {
      handleResetCount();
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleDecrementCount}>
      <Icon
        name="remove"
        size={40}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f66",
    borderRadius: 9,
    paddingHorizontal: "3%",
    paddingVertical: "1%"
  }
});