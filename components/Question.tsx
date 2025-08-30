import { Image, Text } from "react-native";

type QuestionProps = {
  image: any;
  question: string;
};

const Question = ({ image, question }: QuestionProps) => {
  return (
    <>
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>{question}</Text>
    </>
  );
};

export default Question;
