import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type AnswerButtonProps = {
  label: string;
  onPress: () => void;
  color?: string;
  icon?: null;
};

function AnswerButton({ label, onPress, color = "#C1440F" }: AnswerButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, width: 80, height: 40 },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default AnswerButton;
