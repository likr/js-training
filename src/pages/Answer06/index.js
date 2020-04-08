import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart06";
import answer from "./answer.md";

const convertData = (input) => {
  const colors = {
    男性: "blue",
    女性: "red",
  };
  return input.map(({ gender, x, y }) => {
    return {
      color: colors[gender],
      gender,
      bmi: x / (y / 100) ** 2,
      weight: x,
      height: y,
    };
  });
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      lessonUrl="/lesson06"
      title="Lesson 06 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
