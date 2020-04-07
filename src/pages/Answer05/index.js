import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart05";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson05"
      title="Lesson 05 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
