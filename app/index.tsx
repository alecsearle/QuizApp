import AnswerButton from "@/components/AnswerButton";
import NavigationButton from "@/components/NavigationButton";
import { climbingQuestions } from "@/data/climbingQuestions";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = climbingQuestions[currentIndex];
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: isLandscape ? 50 : 25,
    },
    contentContainer: {
      width: "100%",
      flexDirection: isLandscape ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
    },
    imageContainer: {
      flex: isLandscape ? 1 : undefined,
      padding: 10,
    },
    image: {
      width: isLandscape ? width * 0.4 : 300,
      height: isLandscape ? height * 0.6 : 350,
      borderRadius: 8,
    },
    questionContainer: {
      flex: isLandscape ? 1 : undefined,
      alignItems: "center",
      padding: 10,
    },
    questionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 12,
    },
    questionText: {
      fontSize: 20,
      fontWeight: "normal",
      marginVertical: 12,
      textAlign: "center",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: isLandscape ? "60%" : "80%",
      marginVertical: 10,
    },
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: "Climbing Quiz",
          headerStyle: { backgroundColor: "#C1440E" },
          headerTintColor: "#fff",
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={currentQuestion.image} style={styles.image} />
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>Question {currentQuestion.id}</Text>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>

            <View style={styles.buttonContainer}>
              <AnswerButton label="TRUE" onPress={() => handleAnswer(true)} color="#0f5a1fff" />
              <AnswerButton label="FALSE" onPress={() => handleAnswer(false)} color="#c93423ff" />
            </View>

            <View style={styles.buttonContainer}>
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

            <NavigationButton
              label="CHEAT"
              onPress={handleCheat}
              color="#C1440E"
              icon="eye"
              iconPosition="right"
            />
          </View>
        </View>
      </View>
    </>
  );
}
