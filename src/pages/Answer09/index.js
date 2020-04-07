import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart09";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson09"
      title="Lesson 09 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
