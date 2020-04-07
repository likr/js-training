import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart10";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson10"
      title="Lesson 10 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
