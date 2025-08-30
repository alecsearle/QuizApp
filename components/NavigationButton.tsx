import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NavigationButtonProps = {
  label: string;
  onPress: () => void;
  color?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: "left" | "right";
};

function NavigationButton({
  label,
  onPress,
  color = "#C1440F",
  icon,
  iconPosition,
}: NavigationButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, height: 40 },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.contentContainer}>
        {icon && iconPosition === "left" && (
          <>
            <Ionicons name={icon} size={20} color="white" style={styles.iconLeft} />
            <Text style={styles.text}>{label}</Text>
          </>
        )}
        <Ionicons name={undefined} size={0} color="transparent" style={{ display: "none" }} />
        {icon && iconPosition === "right" && (
          <>
            <Text style={styles.text}>{label}</Text>
            <Ionicons name={icon} size={20} color="white" style={styles.iconRight} />
          </>
        )}
      </View>
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
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default NavigationButton;
