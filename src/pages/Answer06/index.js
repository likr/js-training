import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart06";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson06"
      title="Lesson 06 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
