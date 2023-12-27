import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DecrementButton from "../../components/DecrementButton";
import ResetButton from "../../components/ResetButton";
import IncrementButton from "../../components/IncrementButton";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleResetCount = () => (count && setCount(0));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <DecrementButton
          count={count}
          onSetCount={setCount}
          handleResetCount={handleResetCount}
        />
        <ResetButton
          handleResetCount={handleResetCount}
        />
        <IncrementButton
          count={count}
          onSetCount={setCount}
          handleResetCount={handleResetCount}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    borderColor: "rgba(255, 255, 255, .2)",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: "5%",
    width: "90%",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 70
  },
  buttonsContainer: {
    marginTop: "5%",
    flexDirection: "row"
  }
});