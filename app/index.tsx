import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Quiz App",
          headerStyle: {
            backgroundColor: "#266938ff",
          },
          headerTintColor: "#fff",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </>
  );
}
