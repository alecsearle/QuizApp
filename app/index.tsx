import AnswerButton from "@/components/AnswerButton";
import NavigationButton from "@/components/NavigationButton";
import { climbingQuestions } from "@/data/climbingQuestions";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = climbingQuestions[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % climbingQuestions.length);
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? climbingQuestions.length - 1 : prev - 1));
  };

  const handleAnswer = (answer: boolean) => {
    if (answer === currentQuestion.correctAnswer) {
      Alert.alert("Correct", currentQuestion.explanation, [
        {
          text: "Next Question",
          onPress: () => goNext(),
        },
      ]);
    } else {
      // Handle incorrect answer
      alert("Incorrect :/ \n Level Up Bro");
    }
  };

  const router = useRouter();
  const handleCheat = () => {
    router.push({
      pathname: "/cheat",
      params: { questionId: currentIndex },
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Climbing Quiz",
          headerStyle: { backgroundColor: "#C1440E" },
          headerTintColor: "#fff",
        }}
      />
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 25 }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 12 }}>
          Question {currentQuestion.id}{" "}
        </Text>
        <Image source={currentQuestion.image} style={styles.image} />
        <Text style={{ fontSize: 20, fontWeight: "normal", marginVertical: 12 }}>
          {currentQuestion.question}
        </Text>

        {/* Answer Options */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <AnswerButton label="TRUE" onPress={() => handleAnswer(true)} color="#0f5a1fff" />
          <AnswerButton label="FALSE" onPress={() => handleAnswer(false)} color="#c93423ff" />
        </View>

        {/* Navigation Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <NavigationButton
            label="PREV"
            onPress={goPrevious}
            color="#C1440E"
            icon="chevron-back"
            iconPosition="left"
          />
          <NavigationButton
            label="NEXT"
            onPress={goNext}
            color="#C1440E"
            icon="chevron-forward"
            iconPosition="right"
          />
        </View>

        <View>
          <AnswerButton label="CHEAT" onPress={handleCheat} color="#C1440E" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
    borderRadius: 8,
  },
});
