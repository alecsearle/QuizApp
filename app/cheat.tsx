import { climbingQuestions } from "@/data/climbingQuestions";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationButton from "../components/NavigationButton";

export default function Cheat() {
  const { questionId } = useLocalSearchParams();
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = climbingQuestions[Number(questionId)];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Are you sure?",
          headerStyle: { backgroundColor: "#C1440E" },
          headerTintColor: "#fff",
        }}
      />
      <View style={styles.container}>
        {!showAnswer ? (
          <>
            <Text style={styles.warningText}>Are you sure you want to see the answer?</Text>
            <View style={styles.buttonContainer}>
              <NavigationButton
                label="Show Answer"
                onPress={() => setShowAnswer(true)}
                icon="eye"
                iconPosition="right"
              />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.answerText}>
              The correct answer is: {currentQuestion.correctAnswer ? "True" : "False"}
            </Text>
            <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
            <NavigationButton
              label="Return to Quiz"
              onPress={() => router.back()}
              icon="home"
              iconPosition="left"
            />
          </>
        )}
      </View>
    </>
  );
}

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const isLandscape = width > height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: isLandscape ? 50 : 20,
  },
  warningText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  answerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  explanationText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
